import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genero'
})
export class GeneroPipe implements PipeTransform {

  transform(gender: any): string {
    //The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
    if(gender == 'Female'){
      return 'Femenino';
    }
    if(gender == 'Male'){
      return 'Masculino';
    }
    if(gender == 'Genderless'){
      return 'Sin género';
    }
    return 'Desconocido';
  }

}
