import { Pipe, PipeTransform } from '@angular/core';
import { EAPB } from '../../core/models/eapb.model';

@Pipe({
  name: 'buscarEAPB',
  standalone: true
})
export class BuscarEAPBPipe implements PipeTransform {

  transform(listaEapb: EAPB[], entradaInput: string): EAPB[] | undefined[] {
    entradaInput = entradaInput ? entradaInput.toLowerCase() : ''
    
    return entradaInput ? listaEapb.filter(valor => valor.razonSocial.toLowerCase()
    .includes(entradaInput))  : listaEapb

  }

}
