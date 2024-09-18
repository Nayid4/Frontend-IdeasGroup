import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { AutenticacionService } from '../services/autenticacion.service';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProblemDetails } from '../models/problemDetails.model'; 

let isRefreshing = false; // Variable de estado para evitar múltiples redirecciones

export const autenticacionInterceptor: HttpInterceptorFn = (req, next) => {
  const servicioAutenticacion = inject(AutenticacionService);
  const ruta = inject(Router);
  const servicioMensajes = inject(MessageService);

  const token = servicioAutenticacion.token;

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
        if (!isRefreshing) {
          isRefreshing = true;
          servicioAutenticacion.cerrarSesion();
          ruta.navigate(['/inicio']).then(() => {
            isRefreshing = false; // Restablecer el flag después de redirigir
          });
        }
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
          errorMessage = `Código de Error: ${error.status}, Mensaje: ${error.message}`;
          servicioMensajes.add({ severity: 'error', summary: 'Error', detail: errorMessage });
        }
      } else {
        errorMessage = `Código de Error: ${error.status}, Mensaje: ${error.message}`;
        servicioMensajes.add({ severity: 'error', summary: 'Error', detail: errorMessage });
      }

      return throwError(() => new Error(errorMessage));
    })
  );
};


