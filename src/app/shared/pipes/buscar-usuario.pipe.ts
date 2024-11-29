import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../../core/models/usuario.model';

@Pipe({
  name: 'buscarUsuario',
  standalone: true
})
export class BuscarUsuarioPipe implements PipeTransform {

  transform(listaUsuarios: Usuario[], entradaInput: string): Usuario[] | undefined[] {
    entradaInput = entradaInput ? entradaInput.toLowerCase() : ''
    
    return entradaInput ? listaUsuarios.filter(valor => valor.nombres.toLowerCase()
    .includes(entradaInput))  : listaUsuarios

  }

}
