import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../../../../core/types/response.interface';
import { URL_PUBLIC } from '../../url.public';

@Injectable({
  providedIn: 'root',
})
export class PublicRepositoryService {
  constructor(private http: HttpClient) {}

  preConsultation(
    input: PreConsultationModel,
    form_id: string
  ): Observable<Response> {
    return this.http.post<Response>(
      URL_PUBLIC.PRE_CONSULTATION(form_id),
      input
    );
  }
}

export type PreConsultationModel = {
  name: string;
  email: string;
  phone_number: string;
  date_of_birth: string;
  gender: string;
};
