import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/summary',
    pathMatch: 'full'
  },
  {
    path: 'summary',
    loadChildren: () => import('./modules/summary/summary.module').then(m => m.SummaryModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./modules/add/add.module').then(m => m.AddModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '**',
    redirectTo: 'summary',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
