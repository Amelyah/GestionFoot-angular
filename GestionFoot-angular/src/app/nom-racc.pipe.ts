import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomRacc'
})
export class NomRaccPipe implements PipeTransform {

  transform(nom: string, prenom : string): string {
    return nom.toUpperCase()+"."+prenom.toUpperCase().substring(0, 1);
  }

}
