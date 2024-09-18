import { CanActivateFn } from '@angular/router';

export const usuarioAutenticadoGuard: CanActivateFn = (route, state) => {
  return true;
};
