import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';

export const autenticadoGuard: CanActivateFn = (route, state) => {
  const servicioAutenticacion = inject(AutenticacionService)
  return servicioAutenticacion.token != null;
};
