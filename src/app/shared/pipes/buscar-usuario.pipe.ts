import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarUsuario',
  standalone: true
})
export class BuscarUsuarioPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
