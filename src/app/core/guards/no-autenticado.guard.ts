import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';

export const noAutenticadoGuard: CanActivateFn = (route, state) => {
  const servicioAutenticacion = inject(AutenticacionService);
  const router = inject(Router);

  if (servicioAutenticacion.token) {
    // Si el usuario está autenticado, redirigir al dashboard
    router.navigate(['/dashboard']);
    return false;
  }

  return true;
};
