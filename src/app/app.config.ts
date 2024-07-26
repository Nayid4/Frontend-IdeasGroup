import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { autenticacionInterceptor } from './core/interceptors/autenticacion.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    HttpClientModule,
    provideHttpClient(withFetch(),
    withInterceptors([autenticacionInterceptor])),
    provideAnimationsAsync()
  ]
};
