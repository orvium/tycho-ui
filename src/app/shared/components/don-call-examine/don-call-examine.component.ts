import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';
import { CallForData } from 'src/app/core/interfaces/call-for-data';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { FakeApiService } from '../../../core/services/fake-api/fake-api.service';
import { DonorDataset } from '../../../core/interfaces/donor-dataset';
import { UploadDatasetComponent } from '../upload-dataset/upload-dataset.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-don-call-examine',
  templateUrl: './don-call-examine.component.html',
  styleUrls: ['./don-call-examine.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonCallExamineComponent implements OnInit, AfterViewInit {
  public hasJoined = false;
  private tags: string[];
  @Input() call: CallForData;
  @Input() datasets: DonorDataset[];
  @Output() datasetUpload: EventEmitter<{description: string, file: File, tags: string[]}>;

  constructor(
    public dialog: MatDialog,
    private authService: AuthenticationService,
    private fakeApi: FakeApiService,
    private cdr: ChangeDetectorRef
  ) {
    this.datasetUpload = new EventEmitter<{description: string, file: File, tags: string[]}>();
  }

  ngOnInit(): void {
    this.fakeApi.getDatasetTags$().pipe(
      tap((tags: string[]) => this.tags = tags)
    ).subscribe();
  }

  ngAfterViewInit(): void {
    this.hasJoined = this.call.donors.includes(this.authService.currentUser$.value._id);
    this.cdr.detectChanges();
  }

  uploadDataset(): void {
    const dialogRef = this.dialog.open(
      UploadDatasetComponent,
      {
        autoFocus: false,
        width: '400px',
        data: {
          tags: this.tags
        }
      }
    );

    dialogRef.afterClosed().subscribe(
      (dataset: {description: string, file: File, tags: string[]}) => this.datasetUpload.emit(dataset)
    );
  }

  onRevoke(): void {
    const dialogRef = this.dialog.open(
      ConfirmationDialogComponent, { autoFocus: false }
    );

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (!confirmed) { return; }

      this.fakeApi.revokeCall$(
        this.authService.currentUser$.value._id,
        this.call._id
      ).pipe(
        tap(() => {
          this.hasJoined = false;
          this.cdr.detectChanges();
        })
      ).subscribe();
    });
  }

  onJoin(): void {
    const dialogRef = this.dialog.open(
      ConfirmationDialogComponent, { autoFocus: false }
    );

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (!confirmed) { return; }

      this.fakeApi.joinCall$(
        this.authService.currentUser$.value._id,
        this.call._id
      ).pipe(
        tap(() => {
          this.hasJoined = true;
          this.cdr.detectChanges();
        })
      ).subscribe();
    });
  }
}
