import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllDatasetsRoutingModule } from './all-datasets-routing.module';
import { AllDatasetsComponent } from './all-datasets/all-datasets.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    AllDatasetsComponent
  ],
  imports: [
    CommonModule,
    AllDatasetsRoutingModule,
    SharedModule
  ]
})
export class AllDatasetsModule { }
