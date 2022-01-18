import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { SharedModule } from '../../shared.module';

import { CallForDataCardComponent } from './call-for-data-card.component';

describe('CallForDataCardComponent', () => {
  let component: CallForDataCardComponent;
  let fixture: ComponentFixture<CallForDataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallForDataCardComponent ],
      imports: [SharedModule],
      providers: [{ provide: AuthenticationService, useValue: { currentUser$: of({_id: ''}) }}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallForDataCardComponent);
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
