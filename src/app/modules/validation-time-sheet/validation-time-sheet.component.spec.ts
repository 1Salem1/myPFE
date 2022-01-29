import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationTimeSheetComponent } from './validation-time-sheet.component';

describe('ValidationTimeSheetComponent', () => {
  let component: ValidationTimeSheetComponent;
  let fixture: ComponentFixture<ValidationTimeSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationTimeSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationTimeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
