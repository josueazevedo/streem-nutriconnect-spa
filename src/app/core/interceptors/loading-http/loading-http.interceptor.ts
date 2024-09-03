import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../../services/loading/loading.service';
let requestCount = 0;
export const loadingInterceptor: HttpInterceptorFn = (request, next) => {
  const loadingService = inject(LoadingService);
  requestCount++;
  if (requestCount === 1) {
    loadingService.show();
  }

  return next(request).pipe(
    finalize(() => {
      requestCount--;
      if (requestCount <= 0) {
        loadingService.hide();
        requestCount = 0;
      }
    })
  );
};
