import { Pipe, PipeTransform } from '@angular/core';
import { IPS } from '../../core/models/ips.model';

@Pipe({
  name: 'buscarIPS',
  standalone: true
})
export class BuscarIPSPipe implements PipeTransform {

  transform(listaIps: IPS[], entradaInput: string): IPS[] | undefined[] {
    entradaInput = entradaInput ? entradaInput.toLowerCase() : ''
    
    return entradaInput ? listaIps.filter(valor => valor.razonSocial.toLowerCase()
    .includes(entradaInput))  : listaIps

  }

}
