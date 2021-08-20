import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { CallForData } from 'src/app/core/interfaces/call-for-data';

@Component({
  selector: 'app-don-call-list',
  templateUrl: './don-call-list.component.html',
  styleUrls: ['./don-call-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonCallListComponent implements OnInit {
  @Input() calls: CallForData[];
  @Output() view: EventEmitter<string>;
  @Output() revoke: EventEmitter<string>;

  constructor() {
    this.view = new EventEmitter<string>();
    this.revoke = new EventEmitter<string>();
  }

  ngOnInit(): void {}

  onView(id: string): void {
    this.view.emit(id);
  }

  onRevoke(id: string): void {
    this.revoke.emit(id);
  }
}
