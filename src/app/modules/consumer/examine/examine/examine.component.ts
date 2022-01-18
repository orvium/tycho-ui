import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { CallForData } from '../../../../core/interfaces/call-for-data';
import { CallShortInfo, Donor } from '../../../../core/interfaces/donor';
import { DonorDataset } from '../../../../core/interfaces/donor-dataset';
import { FakeApiService } from '../../../../core/services/fake-api/fake-api.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-examine',
  templateUrl: './examine.component.html',
  styleUrls: ['./examine.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamineComponent implements OnInit {
  public call: CallForData;
  public donorsDisplayedColumns: string[] = [
    'name', 'surname', 'callDate', 'downloadDataset'
  ];
  public datasetsDisplayedColumns: string[] = [
    'owner', 'description', 'file'
  ];
  public donorsDataSource: MatTableDataSource<Donor>;
  public datasetsDataSource: MatTableDataSource<DonorDataset>;
  public allDatasets: DonorDataset[] = [];
  public donorsList: Donor[] = [];


  @ViewChild('donorsTableSort') donorsTableSort: MatSort;
  @ViewChild('datasetsTableSort') datasetsTableSort: MatSort;

  constructor(
    private fakeApi: FakeApiService,
    private activateRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.call = this.activateRoute.snapshot.data.call;
    this.getDonorsList();
    this.downloadAllDatasets();
  }

  private getDonorsList(): void {
    this.fakeApi.getCallsDonors$(this.call._id).pipe(
      tap((donors: Donor[]) => {
        this.donorsList = donors;
        this.donorsDataSource = new MatTableDataSource(donors);
        this.donorsDataSource.sort = this.donorsTableSort;
        this.cdr.detectChanges();
      }),
    ).subscribe();
  }

  private downloadAllDatasets(): void {
    this.fakeApi.getAllCallDatasets$(this.call._id).pipe(
      tap((datasets: DonorDataset[]) => {
        this.allDatasets = datasets;
        this.datasetsDataSource = new MatTableDataSource(datasets);
        this.datasetsDataSource.sortingDataAccessor = (item, property) => {
          switch (property) {
            case 'file': return item.file.filename;
            case 'owner': return this.donorsList.find((donor: Donor) => {
              return donor._id === item.owner;
            }).surname;
            default: return item[property];
          }
        };
        this.datasetsDataSource.sort = this.datasetsTableSort;
        this.cdr.detectChanges();
      })
    ).subscribe();
  }

  public joinedDate(donor: Donor): Date {
    return donor.calls.find((callShort: CallShortInfo) => {
      return this.call._id === callShort.callId;
    }).date;
  }

  public donorNameFromId(id: string): string {
    const donor = this.donorsList.find((donorLine: Donor) => {
      return donorLine._id === id;
    });

    return `${donor.name} ${donor.surname}`;
  }

  public downloadDonorDatasets(donor: Donor): void {
    this.fakeApi.getDonorDatasetsFromCall$(donor._id, this.call._id).pipe(
      tap((datasets: DonorDataset[]) => {
        if (datasets.length) {
          datasets.forEach(
            (dataset) => FileSaver.saveAs(dataset.file.url, dataset.file.filename)
          );
        }
      })
    ).subscribe();
  }

  public downloadAll(): void {
    this.allDatasets.forEach(
      (dataset: DonorDataset) => FileSaver.saveAs(dataset.file.url, dataset.file.filename)
    );
  }
}
