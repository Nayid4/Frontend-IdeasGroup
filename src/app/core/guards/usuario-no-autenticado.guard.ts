import { CanActivateFn } from '@angular/router';

export const usuarioNoAutenticadoGuard: CanActivateFn = (route, state) => {
  return true;
};
