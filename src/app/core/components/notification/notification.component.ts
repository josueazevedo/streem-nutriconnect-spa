import { Component, OnDestroy } from '@angular/core';
import { NotificationService } from '../../../core/services/notification/notification.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent implements OnDestroy {
  list = new Map<string, Notification>();
  private subscription: Subscription = new Subscription();

  constructor(private notificationService: NotificationService) {
    this.subscription.add(
      this.notificationService.notify.subscribe((notification) => {
        this.addNotification(notification);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addNotification(notification: Notification) {
    this.list.set(notification.id, notification);
    setTimeout(() => {
      this.removeNotification(notification.id);
    }, 5000);
  }

  removeNotification(id: string) {
    this.list.delete(id);
  }
}

export type Notification = {
  id: string;
  type: 'success' | 'warning' | 'error';
  mensage: string;
};
