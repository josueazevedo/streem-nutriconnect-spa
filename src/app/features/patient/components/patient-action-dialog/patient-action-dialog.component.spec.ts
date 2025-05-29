import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientActionDialogComponent } from './patient-action-dialog.component';

describe('PatientActionDialogComponent', () => {
  let component: PatientActionDialogComponent;
  let fixture: ComponentFixture<PatientActionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientActionDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientActionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
