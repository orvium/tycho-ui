import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConCallViewDonorsComponent } from './con-call-view-donors.component';

describe('ConCallViewDonorsComponent', () => {
  let component: ConCallViewDonorsComponent;
  let fixture: ComponentFixture<ConCallViewDonorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConCallViewDonorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConCallViewDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
