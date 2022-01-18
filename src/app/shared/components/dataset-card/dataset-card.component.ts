import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DonorDatasetPopulated } from '../../../core/interfaces/donor-dataset';

@Component({
  selector: 'app-dataset-card',
  templateUrl: './dataset-card.component.html',
  styleUrls: ['./dataset-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatasetCardComponent implements OnInit {
  @Input() dataset: DonorDatasetPopulated;

  constructor() {}

  ngOnInit(): void {}

  public fileExtension(): string {
    const fileName = this.dataset.file.filename;
    return fileName.slice(fileName.lastIndexOf('.') + 1);
  }
}
