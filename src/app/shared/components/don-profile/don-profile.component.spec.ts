import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonProfileComponent } from './don-profile.component';

describe('DonProfileComponent', () => {
  let component: DonProfileComponent;
  let fixture: ComponentFixture<DonProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
