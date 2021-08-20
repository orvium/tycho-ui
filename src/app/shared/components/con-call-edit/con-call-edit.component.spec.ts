import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConCallEditComponent } from './con-call-edit.component';

describe('ConCallEditComponent', () => {
  let component: ConCallEditComponent;
  let fixture: ComponentFixture<ConCallEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConCallEditComponent ]
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
