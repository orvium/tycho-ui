import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full'
  },
  {
    path: 'view',
    loadChildren: () => import('./view/view.module')
      .then(m => m.ViewModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module')
      .then(m => m.ProfileModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./edit/edit.module')
      .then(m => m.EditModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module')
      .then(m => m.CreateModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumerRoutingModule { }
