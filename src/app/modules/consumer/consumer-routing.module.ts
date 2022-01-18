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
  {
    path: 'examine/:id',
    loadChildren: () => import('./examine/examine.module')
      .then(m => m.ExamineModule)
  },
  {
    path: 'all-datasets',
    loadChildren: () => import('./all-datasets/all-datasets.module')
      .then(m => m.AllDatasetsModule)
  },
  { path: '**', redirectTo: 'calls-for-data' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumerRoutingModule { }
