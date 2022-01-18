import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDatasetsComponent } from './all-datasets/all-datasets.component';

const routes: Routes = [
  { path: '', component: AllDatasetsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllDatasetsRoutingModule { }
