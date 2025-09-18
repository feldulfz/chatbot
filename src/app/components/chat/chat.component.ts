import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiService } from '../../services/claude/ai.service';

@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  userInput = signal('');
  isOpen = signal(false); 

  aiService = inject(AiService);

  // Computed signal to check if send button should be disabled
  isSendDisabled = computed(() => 
    !this.userInput().trim() || 
    this.aiService.isLoading() ||
    !this.aiService.context()
  );


  async sendMessage(): Promise<void> {
    const message = this.userInput().trim();
    if (message && !this.aiService.isLoading()) {
      this.userInput.set('');
      await this.aiService.sendMessage(message);
    }
  }

  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  toggleChat(): void {
    this.isOpen.update(open => !open);
  }  
}
