import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCallsRoutingModule } from './my-calls-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyCallsComponent } from './my-calls/my-calls.component';


@NgModule({
  declarations: [
    MyCallsComponent
  ],
  imports: [
    CommonModule,
    MyCallsRoutingModule,
    SharedModule
  ]
})
export class MyCallsModule { }
