import { Response } from './../../../shared/types/response.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_AUHT } from '../url.auth';
import { map, Observable, tap } from 'rxjs';
import { ProfileService } from '../../../core/services/profile/profile.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly http: HttpClient,
    private readonly profile: ProfileService
  ) {}

  login(username: string, password: string): Observable<AuthData> {
    return this.http
      .post<Response<AuthData>>(URL_AUHT.LOGIN, {
        username,
        password,
      })
      .pipe(
        map((res: Response<AuthData>) => res!.data),
        tap((auth) => {
          this.profile.setProfile({ ...auth });
        })
      );
  }
}

export type AuthData = {
  name: string;
  verified: boolean;
  active: boolean;
  profiles: string[];
};
