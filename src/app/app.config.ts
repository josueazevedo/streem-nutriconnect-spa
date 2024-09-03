import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './core/interceptors/loading-http/loading-http.interceptor';
import { credentialInterceptor } from './core/interceptors/credential-http/credential.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([credentialInterceptor, loadingInterceptor])
    ),
  ],
};
