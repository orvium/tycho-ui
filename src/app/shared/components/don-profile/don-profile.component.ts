import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Donor } from '../../../core/interfaces/donor';

@Component({
  selector: 'app-don-profile',
  templateUrl: './don-profile.component.html',
  styleUrls: ['./don-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonProfileComponent implements OnInit {
  form: FormGroup;

  @Input() donor: Donor;
  @Output() submitEvent: EventEmitter<Donor>;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.submitEvent = new EventEmitter<Donor>();
  }

  ngOnInit(): void {
    this.generateForm();
  }


  generateForm(): void {
    this.form = this.fb.group({
      _id: [ this.donor ? this.donor._id : null ],
      name: [ this.donor ? this.donor.name : null ],
      surname: [ this.donor ? this.donor.surname : null ],
      email: [ this.donor ? this.donor.email : null ],
      institution: [ this.donor ? this.donor.institution : null ],
    });
  }

  submitForm(): void {
    this.submitEvent.emit(this.form.value);
  }
}
