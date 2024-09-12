import { Pipe, PipeTransform } from '@angular/core';
import { Enfermedad } from '../../core/models/enfermedad.model';

@Pipe({
  name: 'buscarEnfermedad',
  standalone: true
})
export class BuscarEnfermedadPipe implements PipeTransform {

  transform(listaEnfermedad: Enfermedad[], entradaInput: string): Enfermedad[] | undefined[] {
    entradaInput = entradaInput ? entradaInput.toLowerCase() : ''
    
    return entradaInput ? listaEnfermedad.filter(valor => valor.nombre.toLowerCase()
    .includes(entradaInput))  : listaEnfermedad

  }

}
