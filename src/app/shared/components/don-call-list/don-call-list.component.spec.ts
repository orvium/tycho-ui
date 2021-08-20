import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonCallListComponent } from './don-call-list.component';

describe('DonCallListComponent', () => {
  let component: DonCallListComponent;
  let fixture: ComponentFixture<DonCallListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonCallListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonCallListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
