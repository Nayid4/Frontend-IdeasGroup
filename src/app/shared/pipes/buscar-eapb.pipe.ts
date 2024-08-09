import { Pipe, PipeTransform } from '@angular/core';
import { EAPB } from '../../core/models/eapb.model';

@Pipe({
  name: 'buscarEAPB',
  standalone: true
})
export class BuscarEAPBPipe implements PipeTransform {

  transform(listaProductos: EAPB[], entradaInput: string): EAPB[] | undefined[] {
    entradaInput = entradaInput ? entradaInput.toLowerCase() : ''
    
    return entradaInput ? listaProductos.filter(valor => valor.razonSocial.toLowerCase()
    .includes(entradaInput))  : listaProductos

  }

}
