import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-item.html',
  styleUrl: './faq-item.scss'
})
export class FaqItem {
  @Input({ required: true }) question: string = '';
  @Input({ required: true }) answer: string = '';

  isOpen = signal(false);

  toggle() {
    this.isOpen.update(v => !v);
  }
}