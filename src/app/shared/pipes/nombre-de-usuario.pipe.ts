import { Pipe, PipeTransform } from '@angular/core';
import { UsuarioService } from '../../core/services/usuario.service';
import { catchError, map, Observable, of } from 'rxjs';
import { Usuario } from '../../core/models/usuario.model';

@Pipe({
  name: 'nombreDeUsuario',
  standalone: true
})
export class NombreDeUsuarioPipe implements PipeTransform {

  constructor(private usuarioService: UsuarioService) {}

  transform(idUsuario: string): Observable<string> {
    if (!idUsuario) {
      return of(''); // Retorna un string vacío si no se proporciona un id
    }

    return this.usuarioService.ListarPorId(idUsuario).pipe(
      map((usuario: Usuario) => usuario.nombre), // Extrae el nombre del usuario
      catchError(() => of('Usuario no encontrado')) // Maneja errores, devolviendo un mensaje de error si ocurre
    );
  }

}
