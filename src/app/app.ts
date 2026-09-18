import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './components/card/card';
import { FiltroSearch } from './components/filtro/filtro';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Card,
    FiltroSearch
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('estudo-angular');
}
