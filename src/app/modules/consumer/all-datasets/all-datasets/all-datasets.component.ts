import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DonorDatasetPopulated } from '../../../../core/interfaces/donor-dataset';
import { FakeApiService } from '../../../../core/services/fake-api/fake-api.service';

@Component({
  selector: 'app-all-datasets',
  templateUrl: './all-datasets.component.html',
  styleUrls: ['./all-datasets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllDatasetsComponent implements OnInit {
  public datasets: DonorDatasetPopulated[] = [];
  public tags: string[] = [];
  public selectedTag: string;
  private searchQuery: string;

  constructor(private fakeApi: FakeApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.searchDatasets();

    this.fakeApi.getDatasetTags$().pipe(
      tap((tags: string[]) => {
        this.tags = tags;
        this.cdr.detectChanges();
      })
    ).subscribe();
  }

  public setQuery(query: string): void {
    this.searchQuery = query;
    this.searchDatasets();
  }

  public clearSearch(): void {
    this.searchQuery = null;
    this.searchDatasets();
  }

  public removeTag(): void {
    this.selectedTag = null;
    this.searchDatasets();
  }

  public selectTag(tag: string): void {
    this.selectedTag = tag;
    this.searchDatasets();
  }

  private searchDatasets(): void {
    this.fakeApi.getAllDatasets$(this.searchQuery, this.selectedTag).pipe(
      tap((datasetsList: DonorDatasetPopulated[]) => {
        this.datasets = datasetsList;
        this.cdr.detectChanges();
      })
    ).subscribe();
  }
}
