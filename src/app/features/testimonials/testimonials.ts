import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPANY_TESTIMONIALS } from '../../core/models/company.model';
import { TestimonialCard } from '../../shared/components/testimonial-card/testimonial-card';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, TestimonialCard],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials {
  readonly testimonials = COMPANY_TESTIMONIALS;
}