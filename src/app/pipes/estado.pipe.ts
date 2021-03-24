import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {

  transform(gender: any): string {
        //The status of the character ('Alive', 'Dead' or 'unknown').
        if(gender == 'Alive'){
          return 'Vivo';
        }
        if(gender == 'Dead'){
          return 'Muerto';
        }
        return 'Desconocido';
  }

}
