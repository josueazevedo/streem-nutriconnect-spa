import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../../../../shared/types/response.interface';
import { Patient } from '../../models/patient.model';
import { URL_PATIENT } from '../../url.patient';

@Injectable({
  providedIn: 'root',
})
export class PatientRepositoryService {
  constructor(private http: HttpClient) {}

  create(patient: FormData): Observable<Response<Patient>> {
    return this.http.post<Response<Patient>>(URL_PATIENT.CREATE, patient);
  }

  update(patient: FormData, id: string): Observable<Response<Patient>> {
    return this.http.put<Response<Patient>>(URL_PATIENT.UPDATE(id), patient);
  }

  find(id: string): Observable<Response<Patient>> {
    return this.http.get<Response<Patient>>(URL_PATIENT.FIND(id));
  }

  findAll(): Observable<Response<Patient[]>> {
    return this.http.get<Response<Patient[]>>(URL_PATIENT.FIND_ALL);
  }

  delete(id: string): Observable<Response> {
    return this.http.delete<Response>(URL_PATIENT.DELETE(id));
  }
}
