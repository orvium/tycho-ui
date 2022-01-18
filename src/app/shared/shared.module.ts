import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// materials
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';


// custom
import {ConProfileComponent} from './components/con-profile/con-profile.component';
import {ConCallEditComponent} from './components/con-call-edit/con-call-edit.component';
import {DonProfileComponent} from './components/don-profile/don-profile.component';
import {AuthenticationComponent} from './components/authentication/authentication.component';
import {DonCallExamineComponent} from './components/don-call-examine/don-call-examine.component';
import {HttpClientModule} from '@angular/common/http';
import {CallForDataCardComponent} from './components/call-for-data-card/call-for-data-card.component';
import {ConfirmationDialogComponent} from './components/confirmation-dialog/confirmation-dialog.component';
import {UploadDatasetComponent} from './components/upload-dataset/upload-dataset.component';
import {SearchComponent} from './components/search/search.component';
import {DatasetCardComponent} from './components/dataset-card/dataset-card.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    ConCallEditComponent,
    ConProfileComponent,
    DonProfileComponent,
    DonCallExamineComponent,
    AuthenticationComponent,
    CallForDataCardComponent,
    ConfirmationDialogComponent,
    UploadDatasetComponent,
    SearchComponent,
    DatasetCardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSortModule,
    MatTableModule,
    HttpClientModule,
    MatRippleModule,
    MatIconModule,
    FormsModule,
    MatStepperModule,
    MatTabsModule,
    MatSnackBarModule,
    MatChipsModule
  ],
  exports: [
    ConCallEditComponent,
    ConProfileComponent,
    DonProfileComponent,
    DonCallExamineComponent,
    AuthenticationComponent,
    CallForDataCardComponent,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatRippleModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatStepperModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    SearchComponent,
    DatasetCardComponent,
    MatSelectModule,
    MatChipsModule
  ]
})
export class SharedModule {
}
