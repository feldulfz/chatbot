import { Injectable, signal } from '@angular/core';

export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

export interface ChatContext {
  content: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AiService {

  private apiUrl = 'http://localhost:3000/api/v1/chat/completions';

  // Signals for reactive state management
  messages = signal<Message[]>([]);
  context = signal<ChatContext | null>(null);
  isLoading = signal<boolean>(false);
  error = signal<string | null>(null);
  
  setContext(content: string): void {
    this.context.set({
      content,
      timestamp: new Date()
    });
    // Clear messages when context changes
    this.messages.set([]);
  }

  async sendMessage(userMessage: string): Promise<void> {
    // Add user message to the chat
    const newUserMessage: Message = {
      role: 'user',
      content: userMessage,
      timestamp: new Date()
    };

    this.messages.update(messages => [...messages, newUserMessage]);
    this.isLoading.set(true);
    this.error.set(null);

    try {
      // Prepare the system message with context
      const systemMessageTemp = this.context()
        ? `You are a helpful assistant. Please answer questions based on the following context:\n\n${this.context()?.content}`
        : 'You are a helpful assistant.';

      // Prepare messages for the API
      const apiMessages = this.messages().map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const systemMessage = {
        role: 'system',
        content: systemMessageTemp,
      };

      const response = await fetch(
        this.apiUrl,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'deepseek/deepseek-v3.2',
            messages: [
              systemMessage, 
              ...apiMessages
            ]            
          }),
        },
      );

      // console.log(response)

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to get response from ai');
      }

      // Parse the JSON
      const data = await response.json();

      // console.log("Raw data:", data);

      // Extract AI message
      const reply = data.choices?.[0]?.message?.content || "No response received";
      
      // console.log("AI reply:", reply);

      const assistantMessage: Message = {
        role: 'assistant',
        content: reply,
        timestamp: new Date()
      };

      this.messages.update(messages => [...messages, assistantMessage]);
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      this.isLoading.set(false);
    }
  }

  clearChat(): void {
    this.messages.set([]);
    this.error.set(null);
  }

  clearContext(): void {
    this.context.set(null);
    this.clearChat();
  }
}
