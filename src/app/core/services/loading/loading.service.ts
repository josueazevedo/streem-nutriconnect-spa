import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loading$: Subject<boolean> = new BehaviorSubject(false);

  constructor() {}

  observer(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  show(): void {
    this.loading$.next(true);
  }

  hide(): void {
    this.loading$.next(false);
  }
}
