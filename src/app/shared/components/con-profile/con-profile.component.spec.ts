import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';
import {AuthenticationService} from 'src/app/core/services/authentication/authentication.service';
import {SharedModule} from '../../shared.module';

import {ConProfileComponent} from './con-profile.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ConProfileComponent', () => {
  let component: ConProfileComponent;
  let fixture: ComponentFixture<ConProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConProfileComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule, SharedModule, BrowserAnimationsModule],
      providers: [{provide: AuthenticationService, useValue: {currentUser$: of({_id: ''})}}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
