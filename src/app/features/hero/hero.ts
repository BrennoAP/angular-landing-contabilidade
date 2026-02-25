import { ButtonComponent } from './../../shared/components/button/button';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent {

  heroImage = '/icons/aperto-de-mao.jpg'
  // Função para rolar até o contato (usada no botão)
  contactScroll() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}