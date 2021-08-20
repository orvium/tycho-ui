import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CallDonorInfo } from 'src/app/core/interfaces/call-donor-info';
import { FilterObject } from '../../../core/interfaces/filter-object';

@Component({
  selector: 'app-con-call-view-donors',
  templateUrl: './con-call-view-donors.component.html',
  styleUrls: ['./con-call-view-donors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConCallViewDonorsComponent implements OnInit, AfterViewInit, OnChanges {
  form: FormGroup;
  displayedColumns: string[] = [ 'donor', 'callDate', 'callTitle' ];
  dataSource: MatTableDataSource<CallDonorInfo>;

  @Input() callDonorInfo: CallDonorInfo[];
  @Output() filter: EventEmitter<FilterObject>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _fb: FormBuilder) {
    this.filter = new EventEmitter<FilterObject>();
  }

  ngOnInit(): void {
    this.generateForm();
  }

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.callDonorInfo);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  generateForm(): void {
    this.form = this._fb.group({
      filterBy: [],
    });
  }

  onSearch(): void {
    this.filter.emit(this.form.value);
  }
}
