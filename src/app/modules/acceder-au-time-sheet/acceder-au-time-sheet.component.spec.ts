import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccederAuTimeSheetComponent } from './acceder-au-time-sheet.component';

describe('AccederAuTimeSheetComponent', () => {
  let component: AccederAuTimeSheetComponent;
  let fixture: ComponentFixture<AccederAuTimeSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccederAuTimeSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccederAuTimeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
