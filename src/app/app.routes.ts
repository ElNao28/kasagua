import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { P404Component } from './pages/p404/p404.component';

export const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'galeria',
    loadComponent: ()=> import('./pages/blog/blog.component').then(c=>c.BlogComponent)
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'**',
    component:P404Component
  }
];
