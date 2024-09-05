import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Notification } from '../../../shared/components/notification/notification.component';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notify = new Subject<Notification>();

  constructor() {}

  addNotification(type: 'success' | 'warning' | 'error', mensage: string) {
    const id = uuidv4();
    this.notify.next({ id, type, mensage });
  }
}
