import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';

export const noAutenticadoGuard: CanActivateFn = (route, state) => {
  const servicioAutenticacion = inject(AutenticacionService)

  if(!servicioAutenticacion.token){
    return true
  }

  return false;
};
