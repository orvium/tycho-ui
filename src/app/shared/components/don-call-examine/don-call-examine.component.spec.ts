import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonCallExamineComponent } from './don-call-examine.component';

describe('DonCallExamineComponent', () => {
  let component: DonCallExamineComponent;
  let fixture: ComponentFixture<DonCallExamineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonCallExamineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonCallExamineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
