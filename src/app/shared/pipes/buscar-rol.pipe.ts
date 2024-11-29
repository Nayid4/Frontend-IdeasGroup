import { Pipe, PipeTransform } from '@angular/core';
import { Rol } from '../../core/models/rol.model';

@Pipe({
  name: 'buscarRol',
  standalone: true
})
export class BuscarRolPipe implements PipeTransform {

  transform(listaRoles: Rol[], entradaInput: string): Rol[] | undefined[] {
    entradaInput = entradaInput ? entradaInput.toLowerCase() : ''
    
    return entradaInput ? listaRoles.filter(valor => valor.nombre.toLowerCase()
    .includes(entradaInput))  : listaRoles

  }

}
