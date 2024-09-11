import { Pipe, PipeTransform } from '@angular/core';
import { RespuestaPQRD } from '../../core/models/RespuestaPqrd.model';

@Pipe({
  name: 'buscarPQRD',
  standalone: true
})
export class BuscarPQRDPipe implements PipeTransform {

  transform(listaPQRD: RespuestaPQRD[], entradaInput: string): RespuestaPQRD[] | undefined[] {
    entradaInput = entradaInput ? entradaInput.toLowerCase() : ''
    
    return entradaInput ? listaPQRD.filter(valor => valor.codigoRadicacion.toLowerCase()
    .includes(entradaInput))  : listaPQRD

  }

}
