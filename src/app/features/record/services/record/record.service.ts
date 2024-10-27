import { Injectable } from '@angular/core';
import { PatientSelect } from '../../models/patient-select.model';

@Injectable({
  providedIn: 'root',
})
export class RecordService {
  private patient?: PatientSelect;

  constructor() {}

  setPatient(patient: PatientSelect): void {
    this.patient = patient;
  }

  getPatient(): PatientSelect | undefined {
    return this.patient;
  }
}
