import { CanActivateFn } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';
import { inject } from '@angular/core';
import { DatosUsuario } from '../models/datosUsuario.model';
import { map, tap } from 'rxjs';

export const administradorGuard: CanActivateFn = (route, state) => {
  const servicioAutenticacion = inject(AutenticacionService)

  if (!servicioAutenticacion.token){
    return false
  }

  return servicioAutenticacion.DatosUsuario().pipe(
    map((resp: DatosUsuario) => {
      return resp.rol =="Administrador"
    })
  )
};
