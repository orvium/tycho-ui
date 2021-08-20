import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CallForData } from '../../../core/interfaces/call-for-data';

@Component({
  selector: 'app-con-call-edit',
  templateUrl: './con-call-edit.component.html',
  styleUrls: ['./con-call-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConCallEditComponent implements OnInit {
  form: FormGroup;

  @Input() call: CallForData;
  @Output() onSubmit: EventEmitter<CallForData>;

  constructor(private _fb: FormBuilder) {
    this.onSubmit = new EventEmitter<CallForData>();
  }

  ngOnInit(): void {
    this.generateForm();
  }


  generateForm(): void {
    this.form = this._fb.group({
      title: [ this.call ? this.call.title : null ],
      description: [ this.call ? this.call.description : null ],

      institution: this._fb.group({
        name: [ this.call ? this.call.institution.name : null ],
        isPrivate:[ this.call ? this.call.institution.isPrivate : null ],
        institutionType: [ this.call ? this.call.institution.institutionType : null ],
        location: [ this.call ? this.call.institution.location : null ],
        website: [ this.call ? this.call.institution.website : null ],
        department: [ this.call ? this.call.institution.department : null ],
        description: [ this.call ? this.call.institution.description : null ],
      }),

      contactPerson: this._fb.group({
        name: [ this.call ? this.call.contactPerson.name : null ],
        surname: [ this.call ? this.call.contactPerson.surname : null ],
        email: [ this.call ? this.call.contactPerson.email : null ],
      }),

      data: this._fb.group({
        license: [ this.call ? this.call.data.license : null ],
        thirdParties: [ this.call ? this.call.data.thirdParties : null ],
        dataTemplate: [ this.call ? this.call.data.dataTemplate : null ],
        personalInformation: [ this.call ? this.call.data.personalInformation : null ], 
      })
    });
  }

  submitForm(): void {
    let result = Object.assign({}, this.call ?? this.call, this.form.value);

    this.onSubmit.emit(result);
  }
}
