import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Consumer } from '../../../core/interfaces/consumer';

@Component({
  selector: 'app-con-profile',
  templateUrl: './con-profile.component.html',
  styleUrls: ['./con-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConProfileComponent implements OnInit {
  form: FormGroup;

  @Input() consumer: Consumer;
  @Output() submitEvent: EventEmitter<Consumer>;

  constructor(private fb: FormBuilder, private router: Router) {
    this.submitEvent = new EventEmitter<Consumer>();
  }

  ngOnInit(): void {
    this.generateForm();
  }


  generateForm(): void {
    this.form = this.fb.group({
      name: [ this.consumer ? this.consumer.name : null ],
      isPrivate: [ this.consumer ? this.consumer.isPrivate : null ],
      consumerType: [ this.consumer ? this.consumer.consumerType : null ],
      location: [ this.consumer ? this.consumer.location : null ],
      website: [ this.consumer ? this.consumer.website : null ],
      department: [ this.consumer ? this.consumer.department : null ],
      description: [ this.consumer ? this.consumer.description : null ],
      email: [ this.consumer ? this.consumer.email : null ],
    });
  }

  submitForm(): void {
    const result = Object.assign({}, this.consumer ?? this.consumer, this.form.value);

    this.submitEvent.emit(result);
  }
}
