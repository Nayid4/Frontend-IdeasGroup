import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';
import { map, catchError, of } from 'rxjs';

export const autenticadoGuard: CanActivateFn = (route, state) => {
  const servicioAutenticacion = inject(AutenticacionService);
  const router = inject(Router);

  if (!servicioAutenticacion.token) {
    router.navigate(['/inicio']);
    return false;
  }

  return servicioAutenticacion.DatosUsuario().pipe(
    map(() => true),
    catchError(() => {
      servicioAutenticacion.cerrarSesion();
      router.navigate(['/inicio']);
      return of(false);
    })
  );
};

