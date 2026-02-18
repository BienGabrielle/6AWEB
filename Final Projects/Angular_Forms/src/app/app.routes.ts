import { Routes } from '@angular/router';
import { TemplateDemoComponent } from './template-demo/template-demo.component';
import { ReactiveDemo } from './reactive-demo/reactive-demo.component';
import { CustomFormComponent } from './custom-form/custom-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/template-demo', pathMatch: 'full' },
  { path: 'template-demo', component: TemplateDemoComponent },
  { path: 'reactive-demo', component: ReactiveDemo },
  { path: 'custom-form', component: CustomFormComponent },
  { path: '**', redirectTo: '/template-demo' }
];
