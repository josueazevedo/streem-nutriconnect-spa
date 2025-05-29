import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalPatientDialogComponent } from './external-patient-dialog.component';

describe('ExternalPatientDialogComponent', () => {
  let component: ExternalPatientDialogComponent;
  let fixture: ComponentFixture<ExternalPatientDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalPatientDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExternalPatientDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
