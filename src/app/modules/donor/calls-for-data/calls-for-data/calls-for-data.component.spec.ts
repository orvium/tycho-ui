import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';
import {AuthenticationService} from 'src/app/core/services/authentication/authentication.service';
import {SharedModule} from 'src/app/shared/shared.module';

import {CallsForDataComponent} from './calls-for-data.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CallsForDataComponent', () => {
  let component: CallsForDataComponent;
  let fixture: ComponentFixture<CallsForDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CallsForDataComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, SharedModule, BrowserAnimationsModule],
      providers: [{provide: AuthenticationService, useValue: {currentUser$: of({_id: ''})}}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsForDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
