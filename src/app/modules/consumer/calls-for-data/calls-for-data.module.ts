import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallsForDataRoutingModule } from './calls-for-data-routing.module';
import { CallsForDataComponent } from './calls-for-data/calls-for-data.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CallsForDataComponent
  ],
  imports: [
    CommonModule,
    CallsForDataRoutingModule,
    SharedModule
  ]
})
export class CallsForDataModule { }
