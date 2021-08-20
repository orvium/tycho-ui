import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamineComponent } from './examine/examine.component';

const routes: Routes = [
  {
    path: '',
    component: ExamineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamineRoutingModule { }
