import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { AutenticacionService } from '../services/autenticacion.service';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export const autenticacionInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenAtenticacion = inject(AutenticacionService).token

  console.log(req.url);
  
  console.log('Hola ' + tokenAtenticacion );

  req = req.clone({
    headers: req.headers.set('authorization', tokenAtenticacion || ''),
  })
  
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';

      if (error.error instanceof HttpErrorResponse) {
        errorMessage = `Error: ${error.error.message}`;
      } else {
        errorMessage = `Error code: ${error.status}, message: ${error.message}`;
      }

      return throwError(() => new Error(errorMessage));
    })
  );
};
