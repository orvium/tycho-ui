import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/authentication/authentication.module')
      .then(m => m.AuthenticationModule)
  },
  {
    path: 'donor',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/donor/donor.module')
      .then(m => m.DonorModule)
  },
  {
    path: 'consumer',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/consumer/consumer.module')
      .then(m => m.ConsumerModule)
  },
  {
    path: 'notifications',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/notifications/notifications.module')
      .then(m => m.NotificationsModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
