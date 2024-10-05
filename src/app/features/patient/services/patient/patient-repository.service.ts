import { Pagination } from './../../../../core/types/response.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../../../../core/types/response.interface';
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
    return this.http.patch<Response<Patient>>(URL_PATIENT.UPDATE(id), patient);
  }

  find(id: string): Observable<Response<Patient>> {
    return this.http.get<Response<Patient>>(URL_PATIENT.FIND(id));
  }

  findAll(
    page: number = 1,
    limit: number = 10,
    name?: string,
    status?: string
  ): Observable<Response<Pagination<Patient[]>>> {
    let params = new HttpParams();

    params = params.append('page', page);
    params = params.append('limit', limit);
    if (name) {
      params = params.append('name', name);
    }
    if (status) {
      params = params.append('status', status);
    }

    return this.http.get<Response<Pagination<Patient[]>>>(
      URL_PATIENT.FIND_ALL,
      { params }
    );
  }

  delete(id: string): Observable<Response> {
    return this.http.delete<Response>(URL_PATIENT.DELETE(id));
  }
}
