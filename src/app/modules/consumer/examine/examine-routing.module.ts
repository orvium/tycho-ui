import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConCallExamineResolver } from '../../../core/guards/con-call-examine/con-call-examine.resolver';
import { ExamineComponent } from './examine/examine.component';

const routes: Routes = [
  { path: '', component: ExamineComponent, resolve: { call: ConCallExamineResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamineRoutingModule { }
