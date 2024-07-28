import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';
import { map, tap } from 'rxjs';
import { DatosUsuario } from '../models/datosUsuario.model';

export const usuarioGuard: CanActivateFn = (route, state) => {
  const servicioAutenticacion = inject(AutenticacionService)

  if(!servicioAutenticacion.token){
    return false
  }

  return servicioAutenticacion.DatosUsuario().pipe(
    map((resp: DatosUsuario) => {
      return resp.rol == "Usuario"
    })
  );
};
