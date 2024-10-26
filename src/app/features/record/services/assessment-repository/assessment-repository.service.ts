import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assessment } from '../../models/assessment.model';
import { Response } from '../../../../core/types/response.interface';
import { Observable } from 'rxjs';
import { URL_RECORD_ASSESSMENT } from '../../url.record';

@Injectable({
  providedIn: 'root',
})
export class AssessmentRepositoryService {
  constructor(private http: HttpClient) {}

  create(input: Assessment): Observable<Response<AssessmentResponse>> {
    return this.http.post<Response<AssessmentResponse>>(
      URL_RECORD_ASSESSMENT.CREATE,
      input
    );
  }

  update(input: Assessment): Observable<Response<AssessmentResponse>> {
    return this.http.patch<Response<AssessmentResponse>>(
      URL_RECORD_ASSESSMENT.UPDATE,
      input
    );
  }

  delete(id: string): Observable<Response> {
    return this.http.delete<Response>(URL_RECORD_ASSESSMENT.DELETE(id));
  }

  getById(id: string): Observable<Response<AssessmentResponse>> {
    return this.http.get<Response<AssessmentResponse>>(
      URL_RECORD_ASSESSMENT.FIND(id)
    );
  }

  getCurrent(id: string): Observable<Response<AssessmentResponse>> {
    return this.http.get<Response<AssessmentResponse>>(
      URL_RECORD_ASSESSMENT.CURRENT(id)
    );
  }
}

export type AssessmentResponse = {
  id: string;
  patient_id: string;
  date_assesssment: string;
  weight: number;
  height: number;
  imc: number;
  body_density: number;
  fat_percentage: number;
  obs: string;
  phy_skin_folds: {
    peito: number;
    abdominal: number;
    coxa: number;
    triceps: number;
    subescapular: number;
    suprailiaca: number;
    axilar_media: number;
  };
  phy_circumferences: {
    cintura: number;
    quadril: number;
    braco: number;
    panturrilha: number;
  };
};
