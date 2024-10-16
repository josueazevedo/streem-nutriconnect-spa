import {
  HttpEvent,
  HttpEventType,
  HttpInterceptorFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs';
import { CredentialService } from '../../services/credential/credential.service';

export const credentialInterceptor: HttpInterceptorFn = (request, next) => {
  const credential = inject(CredentialService);

  request = request.clone({
    withCredentials: false,
  });

  if (credential.getAccessToken()) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${credential.getAccessToken()}`,
      },
    });
  }

  return next(request).pipe(
    tap((event: HttpEvent<any>) => {
      if (event.type === HttpEventType.Response) {
        const accessToken = event.headers.get('access-token');
        const refreshToken = event.headers.get('refresh-token');
        if (accessToken && refreshToken) {
          credential.setAccessToken(accessToken);
          credential.setRefreshToken(refreshToken);
        }
      }
    })
  );
};
