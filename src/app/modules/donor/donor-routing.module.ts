import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'calls-for-data',
    pathMatch: 'full'
  },
  {
    path: 'calls-for-data',
    loadChildren: () => import('./calls-for-data/calls-for-data.module')
      .then(m => m.CallsForDataModule)
  },
  {
    path: 'my-calls',
    loadChildren: () => import('./my-calls/my-calls.module')
      .then(m => m.MyCallsModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module')
      .then(m => m.ProfileModule)
  },
  {
    path: 'examine/:id',
    loadChildren: () => import('./examine/examine.module')
      .then(m => m.ExamineModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonorRoutingModule { }
