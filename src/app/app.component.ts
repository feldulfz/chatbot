import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './components/chat/chat.component';
import { AiService } from './services/ai-serrvice/ai.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ChatComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Claude AI Assistant';
  subtitle = 'Powered by Claude 4 Sonnet';
  
  aiService = inject(AiService);
  
  setTheContenxt() {
    this.aiService.setContext('You are a chatbot that must ONLY answer questions using the following context: The cat chased another cat across the yard, while a third cat watched from the fence, and a fourth cat pounced as the last cat ran away. If the user asks something not related to this context, reply: "I can only answer questions about the given context."');
  }
}
