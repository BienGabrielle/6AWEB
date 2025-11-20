import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Profile } from './profile/profile';
import { Skills } from './skills/skills';
import { Proficiencies } from './proficiencies/proficiencies';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Profile, Skills, Proficiencies, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css', './footer/footer.css', './header/header.css', './profile/profile.css', './skills/skills.css', './proficiencies/proficiencies.css']
})
export class App {
  protected readonly title = signal('my-first-app');
}
