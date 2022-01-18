import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CallForData } from 'src/app/core/interfaces/call-for-data';
import { FakeApiService } from 'src/app/core/services/fake-api/fake-api.service';
import { environment } from '../../../../../environments/environment';
import { DonorDataset } from '../../../../core/interfaces/donor-dataset';
import { AuthenticationService } from '../../../../core/services/authentication/authentication.service';
import { SnackbarService } from '../../../../core/services/snackbar/snackbar.service';

@Component({
  selector: 'app-examine',
  templateUrl: './examine.component.html',
  styleUrls: ['./examine.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamineComponent implements OnInit {
  call$: Observable<CallForData>;
  datasets$: Observable<DonorDataset[]>;

  constructor(
    private fakeApi: FakeApiService,
    private activateRoute: ActivatedRoute,
    private authService: AuthenticationService,
    private http: HttpClient,
    private snackbar: SnackbarService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.call$ = this.fakeApi.getCall$(this.activateRoute.snapshot.params.id);

    this.datasets$ = this.fakeApi.getDonorDatasetsFromCall$(
      this.authService.currentUser$.value._id,
      this.activateRoute.snapshot.params.id
    );
  }

  async onDatasetUpload(
    datasetInfo: { description: string, file: File, tags: string[] }
  ): Promise<void> {
    const dataset: DonorDataset = {
      description: datasetInfo.description,
      file: {
        filename: datasetInfo.file.name,
        contentType: datasetInfo.file.type,
        contentLength: datasetInfo.file.size
      },
      call: this.activateRoute.snapshot.params.id,
      owner: this.authService.currentUser$.value._id,
      tags: datasetInfo.tags
    };

    let fileSignedUrl: string;

    await this.http.post<DonorDataset>(
      `${environment.apiEndpoint}/donor-dataset/${dataset.call}/file`,
      { dataset },
    ).toPromise().then(
      (datasetCreated: DonorDataset) => fileSignedUrl = datasetCreated.file.url
    );

    this.http.put(fileSignedUrl, datasetInfo.file).pipe(
      tap(() => {
        this.datasets$ = this.fakeApi.getDonorDatasetsFromCall$(
          this.authService.currentUser$.value._id,
          this.activateRoute.snapshot.params.id
        );
        this.snackbar.openSnackBar('Saved', 'primary', 'Ok');
        this.cdr.detectChanges();
      })
    ).subscribe();
  }
}
