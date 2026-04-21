import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroList } from './components/hero-list/hero-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hero-angular');
}
