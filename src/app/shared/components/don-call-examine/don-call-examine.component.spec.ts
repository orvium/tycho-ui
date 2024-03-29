import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, of } from 'rxjs';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { SharedModule } from '../../shared.module';

import { DonCallExamineComponent } from './don-call-examine.component';

describe('DonCallExamineComponent', () => {
  let component: DonCallExamineComponent;
  let fixture: ComponentFixture<DonCallExamineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonCallExamineComponent ],
      imports: [SharedModule, RouterTestingModule],
      providers: [
        { provide: AuthenticationService, useValue: { currentUser$: new BehaviorSubject({_id: '1'}) }}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonCallExamineComponent);
    component = fixture.componentInstance;
    component.call = {
      _id: '1',
      date: new Date(),
      title: '',
      donors: ['1'],
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
    component.datasets = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
