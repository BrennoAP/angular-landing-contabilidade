import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPANY_FAQ } from '../../core/models/company.model';
import { FaqItem } from '../../shared/components/faq-item/faq-item';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, FaqItem],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class Faq {
  readonly faqData = COMPANY_FAQ;
}