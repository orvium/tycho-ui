import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CallForData } from 'src/app/core/interfaces/call-for-data';

@Component({
  selector: 'app-don-call-examine',
  templateUrl: './don-call-examine.component.html',
  styleUrls: ['./don-call-examine.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonCallExamineComponent implements OnInit {
  @Input() call: CallForData;

  constructor() {}
  ngOnInit(): void {}
}
