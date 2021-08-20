import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// materials
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

// custom
import { ConProfileComponent } from './components/con-profile/con-profile.component';
import { ConCallEditComponent } from './components/con-call-edit/con-call-edit.component';
import { DonProfileComponent } from './components/don-profile/don-profile.component';
import { DonCallListComponent } from './components/don-call-list/don-call-list.component';
import { DonCallViewComponent } from './components/don-call-view/don-call-view.component';
import { ConCallViewDonorsComponent } from './components/con-call-view-donors/con-call-view-donors.component';
import { ConCallViewCallsComponent } from './components/con-call-view-calls/con-call-view-calls.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { DonCallExamineComponent } from './components/don-call-examine/don-call-examine.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ConCallEditComponent,
    ConProfileComponent,
    DonProfileComponent,
    DonCallListComponent,
    DonCallViewComponent,
    DonCallExamineComponent,
    ConCallViewDonorsComponent,
    ConCallViewCallsComponent,
    AuthenticationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSortModule,
    MatTableModule,
    HttpClientModule
  ],
  exports: [
    ConCallEditComponent,
    ConProfileComponent,
    DonProfileComponent,
    DonCallListComponent,
    DonCallViewComponent,
    DonCallExamineComponent,
    ConCallViewDonorsComponent,
    ConCallViewCallsComponent,
    AuthenticationComponent,
  ]
})
export class SharedModule { }
