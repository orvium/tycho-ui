import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthenticationService} from 'src/app/core/services/authentication/authentication.service';
import {SharedModule} from 'src/app/shared/shared.module';

import {NotificationsComponent} from './notifications.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('NotificationsComponent', () => {
  let component: NotificationsComponent;
  let fixture: ComponentFixture<NotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, SharedModule],
      providers: [AuthenticationService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
