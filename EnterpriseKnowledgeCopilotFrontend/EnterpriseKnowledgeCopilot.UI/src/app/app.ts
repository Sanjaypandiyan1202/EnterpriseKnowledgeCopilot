
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HealthService, HealthResponse } from './services/health';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private healthService = inject(HealthService);

  question = '';
  messages: { role: string; text: string }[] = [];

  apiResponse: HealthResponse | null = null;
  errorMessage = '';

  ngOnInit(): void {
    this.healthService.getHealth().subscribe({
      next: (response) => {
        console.log('Backend response:', response);
        this.apiResponse = response;
      },
      error: (error) => {
        console.error('API connection failed:', error);
        this.errorMessage =
          'Could not connect to the backend. Check the API URL and CORS configuration.';
      }
    });
  }

  sendMessage(): void {
    const text = this.question.trim();

    if (!text) return;

    this.messages.push({ role: 'user', text });
    this.question = '';
  }
}
