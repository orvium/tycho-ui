import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from '../../../../core/services/authentication/authentication.service';
import { SharedModule } from '../../../../shared/shared.module';

import { ExamineComponent } from './examine.component';

describe('ExamineComponent', () => {
  let component: ExamineComponent;
  let fixture: ComponentFixture<ExamineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamineComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, SharedModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {snapshot: {data: {call: {_id: '1'}}}}
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamineComponent);
    component = fixture.componentInstance;
    component.call = {
      _id: '1',
      date: new Date(),
      title: '',
      donors: [''],
      consumers: [''],
      description: '',
      keywords: [''],
      imageUrl: '',
      fileUrl: '',
      institution: {
        name: '',
        isPrivate: false,
        institutionType: '',
        location: '',
        website: '',
        department: '',
        description: '',
      },
      contactPerson: {
        name: '',
        surname: '',
        email: '',
      },
      data: {
        license: '',
        thirdParties: '',
        dataTemplate: null,
        personalInformation: '',
      }
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
