import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-dataset',
  templateUrl: './upload-dataset.component.html',
  styleUrls: ['./upload-dataset.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadDatasetComponent implements OnInit {
  public datasetInfo: { description: string, file: File, tags: string[] };
  public tagsList = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.tagsList = data.tags;
  }

  ngOnInit(): void {
    this.datasetInfo = {
      description: null,
      file: null,
      tags: []
    };
  }

  chooseFile(files: File[]): void {
    this.datasetInfo.file = files[0];
  }
}
