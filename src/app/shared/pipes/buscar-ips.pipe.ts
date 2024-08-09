import { Pipe, PipeTransform } from '@angular/core';
import { IPS } from '../../core/models/ips.model';

@Pipe({
  name: 'buscarIPS',
  standalone: true
})
export class BuscarIPSPipe implements PipeTransform {

  transform(listaProductos: IPS[], entradaInput: string): IPS[] | undefined[] {
    entradaInput = entradaInput ? entradaInput.toLowerCase() : ''
    
    return entradaInput ? listaProductos.filter(valor => valor.razonSocial.toLowerCase()
    .includes(entradaInput))  : listaProductos

  }

}
