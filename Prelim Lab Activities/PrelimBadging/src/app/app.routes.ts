import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Join } from './join/join';

export const routes: Routes = [
  { path: '', component: Home },

  {
    path: 'directives',
    loadComponent: () =>
      import('./directives/directives')
        .then(m => m.Directives)
  },

  { path: 'about', component: About },
  { path: 'join', component: Join }
];

