import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joueurRacc'
})
export class JoueurRaccPipe implements PipeTransform {

  transform(value: string): string {
    
    const chemin = value.split('.');
    return chemin[chemin.length - 1].toUpperCase().substring(0, 3);
  }

}
