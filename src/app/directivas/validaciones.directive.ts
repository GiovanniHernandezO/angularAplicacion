import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

export function formularioValidaciones(): ValidatorFn {
  return (control: AbstractControl) => {
    const formularioValidacionesDirective = new ValidacionesDirective();
    return formularioValidacionesDirective.validacion(control);
  }
}

@Directive({
  selector: '[appValidaciones]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidacionesDirective, multi: true}]
})

export class ValidacionesDirective {

  constructor() { }

  validacion(control: import("@angular/forms").AbstractControl): import("@angular/forms").ValidationErrors {
    const variable = <String>control.value;

    if (variable.length < 3) {
      return { 'formularioValidaciones': { 'message': 'El valor ingresado debe contenedor mínimo 3 caracteres' } }
    }
    if (variable.length > 100) {
      return { 'formularioValidaciones': { 'message': 'El valor ingresado debe contenedor máximo 100 caracteres' } }
    }

    return null;
  }

}
