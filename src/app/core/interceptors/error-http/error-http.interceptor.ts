import { InternalServerError } from './../../exceptions/internal-error.exception';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError } from 'rxjs';
import { NotificationService } from '../../services/notification/notification.service';
import { NavigateService } from '../../services/navigate/navigate.service';

export const errorInterceptor: HttpInterceptorFn = (request, next) => {
  const notify = inject(NotificationService);
  const nav = inject(NavigateService);

  return next(request).pipe(
    catchError((e: HttpErrorResponse) => {
      if (e.status === 401) {
        nav.toLogin();
        throw e;
      }
      if (e.status < 500) {
        throw e;
      }
      const err = new InternalServerError();
      notify.addNotification('error', err.message);
      throw err;
    })
  );
};
