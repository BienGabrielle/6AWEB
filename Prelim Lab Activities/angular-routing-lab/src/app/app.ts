import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrls: ['./app.css', './data-binding/data-binding.css', './directives/directives.css', './home/home.css' ]
})
export class App {
  protected readonly title = signal('angular-routing-lab');
}
