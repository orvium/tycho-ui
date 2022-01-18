import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamineRoutingModule } from './examine-routing.module';
import { ExamineComponent } from './examine/examine.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    ExamineComponent
  ],
  imports: [
    CommonModule,
    ExamineRoutingModule,
    SharedModule
  ]
})
export class ExamineModule {}
