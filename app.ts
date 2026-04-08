import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('jesu');
  protected readonly isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }
}
