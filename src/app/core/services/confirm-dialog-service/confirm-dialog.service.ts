import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {
  show = new BehaviorSubject({ show: false, text: '' });
  confirm = new Subject<{ status: boolean; action_event: string }>();
  action_event = '';

  showDialog(text: string, action_event: string) {
    this.action_event = action_event;
    this.show.next({ show: true, text });
  }

  onConfirm(): void {
    this.confirm.next({ status: true, action_event: this.action_event });
    this.show.next({ show: false, text: '' });
    this.action_event = '';
  }

  onCancel(): void {
    this.confirm.next({ status: false, action_event: this.action_event });
    this.show.next({ show: false, text: '' });
    this.action_event = '';
  }

  observerShow() {
    return this.show.asObservable();
  }

  observerConfirm() {
    return this.confirm.asObservable();
  }
}
