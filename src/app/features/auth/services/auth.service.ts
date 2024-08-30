import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_AUHT } from '../url.auth';
import { Observable } from 'rxjs';
import { Response } from '../../../shared/types/response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  login(username: string, password: string): Observable<Response> {
    return this.http.post<Response>(URL_AUHT.LOGIN, {
      username,
      password,
    });
  }
}
