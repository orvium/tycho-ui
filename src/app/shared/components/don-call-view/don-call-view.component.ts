import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CallForData } from 'src/app/core/interfaces/call-for-data';
import { FilterObject } from '../../../core/interfaces/filter-object';

@Component({
  selector: 'app-don-call-view',
  templateUrl: './don-call-view.component.html',
  styleUrls: ['./don-call-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonCallViewComponent implements OnInit {
  form: FormGroup;

  @Input() calls: CallForData[];
  @Output() join: EventEmitter<string>;
  @Output() view: EventEmitter<string>;
  @Output() filter: EventEmitter<FilterObject>;

  constructor(private _fb: FormBuilder) {
    this.join = new EventEmitter<string>();
    this.view = new EventEmitter<string>();
    this.filter = new EventEmitter<FilterObject>();
  }

  ngOnInit(): void {
    this.generateForm();
  }

  generateForm(): void {
    this.form = this._fb.group({
      name: [],
      filterBy: [],
    });
  }

  onJoin(id: string): void {
    this.join.emit(id);
  }

  onView(id: string): void {
    this.view.emit(id);
  }

  onSearch(): void {
    this.filter.emit(this.form.value);
  }
}
