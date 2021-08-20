import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CallForData } from 'src/app/core/interfaces/call-for-data';
import { FilterObject } from '../../../core/interfaces/filter-object';

@Component({
  selector: 'app-con-call-view-calls',
  templateUrl: './con-call-view-calls.component.html',
  styleUrls: ['./con-call-view-calls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConCallViewCallsComponent implements OnInit {
  form: FormGroup;

  @Input() calls: CallForData[];
  @Output() addNew: EventEmitter<void>;
  @Output() edit: EventEmitter<string>;
  @Output() filter: EventEmitter<FilterObject>;

  constructor(private _fb: FormBuilder) {
    this.addNew = new EventEmitter<void>();
    this.edit = new EventEmitter<string>();
    this.filter = new EventEmitter<FilterObject>();
  }

  ngOnInit(): void {
    this.generateForm();
  }

  generateForm(): void {
    this.form = this._fb.group({
      filterBy: [],
    });
  }

  onEdit(id: string): void {
    this.edit.emit(id);
  }

  onSearch(): void {
    this.filter.emit(this.form.value);
  }

  onAddNew(): void {
    this.addNew.emit();
  }
}
