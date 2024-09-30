import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {
  show = new BehaviorSubject({ show: false, text: '' });
  confirm = new Subject<boolean>();

  showDialog(text: string) {
    this.show.next({ show: true, text });
  }

  onConfirm(): void {
    this.confirm.next(true);
    this.show.next({ show: false, text: '' });
  }

  onCancel(): void {
    this.confirm.next(false);
    this.show.next({ show: false, text: '' });
  }

  observerShow() {
    return this.show.asObservable();
  }

  observerConfirm() {
    return this.confirm.asObservable();
  }
}
