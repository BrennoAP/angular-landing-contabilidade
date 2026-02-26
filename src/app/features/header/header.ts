import { Component, signal, computed,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPANY } from '../../core/models/company.model';
import { ButtonComponent } from '../../shared/components/button/button'; 
import { ContactModalService } from '../../core/services/contact-modal-service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent], // Injeção do componente
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  company = signal(COMPANY);
  isMobileMenuOpen = signal(false);
  headerIcon = '/icons/iconecont.png';
  private modalService = inject(ContactModalService);

  whatsappLink = computed(() => {
    const phone = this.company().whatsapp;
    return `https://wa.me/55${phone}?text=Olá! Vim pelo site.`;
  });

  toggleMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMobileMenuOpen.set(false);
  }

  openContactModal() {
    this.modalService.open();
  }
}



