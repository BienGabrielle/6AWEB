import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Home } from './home/home';
import { Employees } from './employees/employees';
import { About } from './about/about';
import { Products } from './products/products';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'employees', component: Employees },
  { path: 'products', component: Products },
  { path: 'about', component: About },
  
  { path: '**', component: Pagenotfound }
];
