import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallsForDataComponent } from './calls-for-data/calls-for-data.component';

const routes: Routes = [
  {
    path: '',
    component: CallsForDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallsForDataRoutingModule { }
