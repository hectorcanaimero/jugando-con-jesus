import { AuthGuard } from './../shared/services/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: 'pages',
    component: PagesPage,
    children: [
      {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'grupos',
        canActivate: [AuthGuard],
        loadChildren: () => import('./grupos/grupos.module').then( m => m.GruposPageModule)
      },
      {
        path: 'timeline',
        canActivate: [AuthGuard],
        loadChildren: () => import('./timeline/timeline.module').then( m => m.TimelinePageModule)
      },
      {
        path: 'users',
        canActivate: [AuthGuard],
        loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
      },
      {
        path: '',
        redirectTo: '/pages/home',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: '',
    redirectTo: '/pages/home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
