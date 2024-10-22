import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assessment } from '../../models/assessment.model';
import { Response } from '../../../../core/types/response.interface';
import { Observable } from 'rxjs';
import { URL_RECORD } from '../../url.record';

@Injectable({
  providedIn: 'root',
})
export class AssessmentRepositoryService {
  constructor(private http: HttpClient) {}

  create(input: Assessment): Observable<Response> {
    return this.http.post<Response>(URL_RECORD.CREATE_ASSESMENT, input);
  }
}
