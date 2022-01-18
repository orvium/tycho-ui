import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { CallForData } from 'src/app/core/interfaces/call-for-data';
import { CallForDataCardButton } from 'src/app/core/interfaces/call-for-data-card-button';

@Component({
  selector: 'app-call-for-data-card',
  templateUrl: './call-for-data-card.component.html',
  styleUrls: ['./call-for-data-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallForDataCardComponent implements OnInit {
  @Input() call: CallForData;
  @Input() mainButton: CallForDataCardButton;
  @Input() secondaryButton: CallForDataCardButton;
  @Output() mainButtonClick: EventEmitter<string>;
  @Output() secondaryButtonClick: EventEmitter<string>;

  constructor() {
    this.mainButtonClick = new EventEmitter<string>();
    this.secondaryButtonClick = new EventEmitter<string>();
  }

  ngOnInit(): void {}

  onMainButtonClick(id: string): void {
    this.mainButtonClick.emit(id);
  }

  onSecondaryButtonClick(id: string): void {
    this.secondaryButtonClick.emit(id);
  }
}
