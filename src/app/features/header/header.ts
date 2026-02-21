import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPANY } from '../../core/models/company.model';
import { ButtonComponent } from '../../shared/components/button/button'; // Importe AQUI

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

  // Função que o novo botão de orçamento vai chamar
  openContactModal() {
    console.log("Aqui vai abrir o modal de email futuramente!");
    this.closeMenu();
  }
}



