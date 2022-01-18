import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CallForData } from '../../../core/interfaces/call-for-data';
import { Donor } from '../../../core/interfaces/donor';
import { DonorDataset, DonorDatasetPopulated } from '../../../core/interfaces/donor-dataset';

import { DatasetCardComponent } from './dataset-card.component';

describe('DatasetCardComponent', () => {
  let component: DatasetCardComponent;
  let fixture: ComponentFixture<DatasetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasetCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetCardComponent);
    component = fixture.componentInstance;
    component.dataset = {
      description: '',
      call: '',
      tags: [],
      file: {
        filename: ''
      },
      owner: {
        name: '',
        surname: ''
      } as Donor
    } as DonorDatasetPopulated;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
