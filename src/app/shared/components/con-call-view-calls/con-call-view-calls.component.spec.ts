import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConCallViewCallsComponent } from './con-call-view-calls.component';

describe('ConCallViewCallsComponent', () => {
  let component: ConCallViewCallsComponent;
  let fixture: ComponentFixture<ConCallViewCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConCallViewCallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConCallViewCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
