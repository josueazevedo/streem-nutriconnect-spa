import { Response } from './../../../shared/types/response.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_AUHT } from '../url.auth';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  login(username: string, password: string): Observable<AuthData> {
    return this.http
      .post<Response<AuthData>>(URL_AUHT.LOGIN, {
        username,
        password,
      })
      .pipe(map((res: Response<AuthData>) => res!.data));
  }
}

export type AuthData = {
  verified: boolean;
  active: boolean;
  profiles: string[];
};
