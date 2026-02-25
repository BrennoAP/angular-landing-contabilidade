import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPANY_SERVICES } from '../../core/models/company.model';
import { ServiceCard } from '../../shared/components/service-card/service-card';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, ServiceCard],
  templateUrl: './solutions.html',
  styleUrl: './solutions.scss'
})
export class Solutions {
  // Converte o objeto de serviços em lista para o @for
  readonly servicesList = computed(() => Object.values(COMPANY_SERVICES));
}