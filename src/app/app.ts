import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './features/header/header';
import { HeroComponent } from "./features/hero/hero";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 
}
