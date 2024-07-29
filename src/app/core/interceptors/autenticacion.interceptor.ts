import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { AutenticacionService } from '../services/autenticacion.service';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProblemDetails } from '../models/problemDetails.model'; 

export const autenticacionInterceptor: HttpInterceptorFn = (req, next) => {
  const servicioAutenticacion = inject(AutenticacionService);
  const ruta = inject(Router);
  const servicioMensajes = inject(MessageService);

  const token = servicioAutenticacion.token;

  console.log(req.url);
  console.log('Hola ' + token);

  if (token) {
    req = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';
      const CODES = [401, 403];

      if (CODES.includes(error.status)) {
        servicioAutenticacion.cerrarSesion();
        ruta.navigate(['/inicio']);
      }

      if (error.error instanceof HttpErrorResponse) {
        errorMessage = `Error: ${error.error.message}`;
        servicioMensajes.add({ severity: 'error', summary: 'Error', detail: errorMessage });
      } else if (error.error) {
        const problemDetails: ProblemDetails = error.error;

        if (problemDetails.title) {
          errorMessage = problemDetails.title;
        }

        if (problemDetails.errors) {
          for (const [key, messages] of Object.entries(problemDetails.errors)) {
            messages.forEach(message => {
              servicioMensajes.add({
                severity: 'error',
                summary: 'Error',
                detail: message
              });
            });
          }
        } else {
          errorMessage = `Codigo de Error: ${error.status}, Mensaje: ${error.message}`;
          servicioMensajes.add({ severity: 'error', summary: 'Error', detail: errorMessage });
        }
      } else {
        errorMessage = `Codigo de Error: ${error.status}, Mensaje: ${error.message}`;
        servicioMensajes.add({ severity: 'error', summary: 'Error', detail: errorMessage });
      }

      return throwError(() => new Error(errorMessage));
    })
  );
};
