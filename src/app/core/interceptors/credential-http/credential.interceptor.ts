import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

export const credentialInterceptor: HttpInterceptorFn = (request, next) => {
  //   const store = inject(StoreService);
  const token = '';

  request = request.clone({
    withCredentials: false,
  });

  if (token) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(request);
};
