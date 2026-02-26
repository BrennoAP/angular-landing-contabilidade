import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './features/header/header';
import { HeroComponent } from "./features/hero/hero";
import { Solutions } from "./features/solutions/solutions";
import { Faq } from "./features/faq/faq";
import { SectionDivider } from './shared/components/section-divider/section-divider';
import { Testimonials } from "./features/testimonials/testimonials";
import { Footer } from "./features/footer/footer";
import { ContactModal } from "./shared/components/contact-modal/contact-modal";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent, Solutions, Faq, SectionDivider, Testimonials, Footer, ContactModal],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 
}
