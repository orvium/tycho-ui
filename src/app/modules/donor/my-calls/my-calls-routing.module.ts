import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCallsComponent } from './my-calls/my-calls.component';

const routes: Routes = [
  {
    path: '',
    component: MyCallsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCallsRoutingModule { }
