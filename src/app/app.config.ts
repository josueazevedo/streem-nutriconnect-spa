import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './core/interceptors/loading-http/loading-http.interceptor';
import { credentialInterceptor } from './core/interceptors/credential-http/credential.interceptor';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { errorInterceptor } from './core/interceptors/error-http/error-http.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        credentialInterceptor,
        loadingInterceptor,
        errorInterceptor,
      ])
    ),
    provideEnvironmentNgxMask(),
  ],
};
