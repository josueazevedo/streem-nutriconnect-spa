import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CredentialService {
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  constructor() {}

  setAccessToken(token: string | null): void {
    this.accessToken = token;
  }

  setRefreshToken(token: string | null): void {
    this.refreshToken = token;
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  getRefreshToken(): string | null {
    return this.refreshToken;
  }

  clearTokens(): void {
    this.accessToken = null;
    this.refreshToken = null;
  }

  isAuthenticated(): boolean {
    return !!this.accessToken;
  }
}
