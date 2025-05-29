import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPatientDialogComponent } from './new-patient-dialog.component';

describe('NewPatientDialogComponent', () => {
  let component: NewPatientDialogComponent;
  let fixture: ComponentFixture<NewPatientDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPatientDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewPatientDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
