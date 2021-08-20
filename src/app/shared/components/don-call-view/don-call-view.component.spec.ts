import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonCallViewComponent } from './don-call-view.component';

describe('DonCallViewComponent', () => {
  let component: DonCallViewComponent;
  let fixture: ComponentFixture<DonCallViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonCallViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonCallViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
