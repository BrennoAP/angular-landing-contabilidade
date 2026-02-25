import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-card.html',
  styleUrl: './testimonial-card.scss'
})
export class TestimonialCard {
  @Input({ required: true }) name: string = '';
  @Input({ required: true }) role: string = '';
  @Input({ required: true }) text: string = '';
  @Input({ required: true }) initials: string = '';
}