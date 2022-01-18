import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthenticationService} from 'src/app/core/services/authentication/authentication.service';
import {SharedModule} from 'src/app/shared/shared.module';

import {ExamineComponent} from './examine.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BehaviorSubject} from 'rxjs';

describe('ExamineComponent', () => {
  let component: ExamineComponent;
  let fixture: ComponentFixture<ExamineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExamineComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, SharedModule],
      providers: [
        {provide: AuthenticationService, useValue: {currentUser$: new BehaviorSubject({_id: ''})}}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
