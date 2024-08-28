import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_AUHT } from '../url.auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(URL_AUHT.LOGIN, { username, password });
  }
}
