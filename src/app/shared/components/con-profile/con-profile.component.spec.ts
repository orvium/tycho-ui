import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConProfileComponent } from './con-profile.component';

describe('ConProfileComponent', () => {
  let component: ConProfileComponent;
  let fixture: ComponentFixture<ConProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConProfileComponent ]
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
