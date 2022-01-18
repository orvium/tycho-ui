import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../../shared.module';

import {ConCallEditComponent} from './con-call-edit.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ConCallEditComponent', () => {
  let component: ConCallEditComponent;
  let fixture: ComponentFixture<ConCallEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConCallEditComponent],
      imports: [SharedModule, BrowserAnimationsModule, HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConCallEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
