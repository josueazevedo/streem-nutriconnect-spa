import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profile = new BehaviorSubject<Profile | undefined>(undefined);

  constructor() {}

  getProfile(): Observable<Profile | undefined> {
    return this.profile?.asObservable();
  }

  setProfile(profile: Profile): void {
    this.profile.next(profile);
  }

  clearProfile(): void {
    this.profile.next(undefined);
  }
}

export interface Profile {
  name: string;
  verified: boolean;
  active: boolean;
  profiles: string[];
}
