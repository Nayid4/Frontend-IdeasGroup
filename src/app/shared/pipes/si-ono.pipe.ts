import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'siONo',
  standalone: true
})
export class SiONoPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Sí' : 'No';
  }

}
