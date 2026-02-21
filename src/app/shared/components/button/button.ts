import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class ButtonComponent {
  // Propriedades que você pode injetar no botão
  @Input() label: string = 'Clique aqui';
  @Input() variant: 'primary' | 'glass' | 'whatsapp' | 'outline' = 'primary';
  @Input() icon?: string; // Ex: 'pi pi-whatsapp' ou ícone do Material
  @Input() href?: string; // Se passar href, ele vira um <a>
  @Input() target: string = '_self'; // Para links externos (_blank)
  @Input() customClass: string = ''; // Para classes de layout (ex: mobile-only)

  // Evento emitido quando clicado (usado quando é um <button>)
  @Output() onClick = new EventEmitter<Event>();

  // Monta as classes CSS baseadas nas propriedades
  get classes(): string {
    return `custom-btn btn-${this.variant} ${this.customClass}`;
  }

  handleClick(event: Event) {
    if (!this.href) {
      this.onClick.emit(event);
    }
  }
}