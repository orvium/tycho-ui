import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CallForData } from '../../../core/interfaces/call-for-data';
import { CallForDataService } from '../../../core/services/call-for-data/call-for-data.service';

@Component({
  selector: 'app-con-call-edit',
  templateUrl: './con-call-edit.component.html',
  styleUrls: ['./con-call-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConCallEditComponent implements OnInit {
  public generalForm: FormGroup;
  public fileObj: File;
  public fileName: string;

  @Input() call: CallForData;
  @Output() submitEvent: EventEmitter<CallForData>;
  @Output() finishEvent: EventEmitter<void>;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private cfdService: CallForDataService
  ) {
    this.submitEvent = new EventEmitter<CallForData>();
    this.finishEvent = new EventEmitter<void>();
  }

  ngOnInit(): void {
    this.generateForm();
  }


  generateForm(): void {
    this.generalForm = this.fb.group({
      title: [ this.call ? this.call.title : null, [Validators.required] ],
      description: [ this.call ? this.call.description : null, [Validators.required] ],
      imageUrl: [ this.call ? this.call.imageUrl : null ],
      keywords: [
        this.call ? this.call.keywords.join(' ')
                  : null
      ],

      institution: this.fb.group({
        name: [ this.call ? this.call.institution.name : null ],
        isPrivate: [ this.call ? this.call.institution.isPrivate : null ],
        institutionType: [ this.call ? this.call.institution.institutionType : null ],
        location: [ this.call ? this.call.institution.location : null ],
        website: [ this.call ? this.call.institution.website : null ],
        department: [ this.call ? this.call.institution.department : null ],
        description: [ this.call ? this.call.institution.description : null ],
      }),

      contactPerson: this.fb.group({
        name: [ this.call ? this.call.contactPerson.name : null ],
        surname: [ this.call ? this.call.contactPerson.surname : null ],
        email: [ this.call ? this.call.contactPerson.email : null ],
      }),

      data: this.fb.group({
        license: [ this.call ? this.call.data.license : null ],
        thirdParties: [ this.call ? this.call.data.thirdParties : null ],
        dataTemplate: [ this.call ? this.call.data.dataTemplate : null ],
        personalInformation: [ this.call ? this.call.data.personalInformation : null ],
      })
    });

    if (this.call && this.call.data.dataTemplate) {
      this.fileName = this.call.data.dataTemplate.filename;
    }
  }

  submitForm(): void {
    const result = Object.assign({}, this.call ?? this.call, this.generalForm.value);

    if (result.keywords) {
      result.keywords = result.keywords.split(' ');
    }

    this.submitEvent.emit(result);
  }

  async uploadFile(files: File[]): Promise<void> {
    const choosenFile: File = files[0];

    const file = {
      name: choosenFile.name,
      type: choosenFile.type,
      size: choosenFile.size,
      lastModified: choosenFile.lastModified
    };

    this.fileObj = choosenFile;

    let fileSignedUrl: string;

    const callId = this.call ? this.call._id : this.cfdService.currentCall._id;

    await this.http.post<{ signedUrl: string, call: CallForData }>(
      `${environment.apiEndpoint}/call/${callId}/file`, { file },
    ).toPromise().then(
      ({signedUrl, call}) => {
        this.generalForm.get('data').get('dataTemplate').setValue(call.data.dataTemplate);
        this.fileName = call.data.dataTemplate.filename;
        fileSignedUrl = signedUrl;

        if (this.call) { this.call.fileUrl = call.fileUrl; }
        this.cfdService.currentCall = call;

        if (!this.call) {
          this.submitEvent.emit(call);
        }

        this.cdr.detectChanges();
      }
    );

    this.http.put(fileSignedUrl, choosenFile).subscribe();
  }

  finish(): void {
    this.finishEvent.emit();
  }
}
