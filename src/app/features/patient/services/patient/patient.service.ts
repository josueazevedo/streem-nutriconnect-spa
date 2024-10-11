import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../../../../core/types/response.interface';
import { URL_PATIENT } from '../../url.patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}

  createExternalForm(): Observable<Response> {
    return this.http.post<Response>(URL_PATIENT.CREATE_EXTERNAL_FORM, {});
  }
}
