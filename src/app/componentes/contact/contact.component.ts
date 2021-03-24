import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formularioValidaciones } from '../../directivas/validaciones.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public paises: any[] = [
    'Chile',
    'Argentina',
    'Bolivia',
    'Brasil',
    'Colombia',
    'Ecuador',
    'Guyana',
    'Paraguay',
    'Perú',
    'Suriname',
    'Uruguay',
    'Venezuela',
  ];

  public contactoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, formularioValidaciones()]),
    email: new FormControl('', [Validators.required, formularioValidaciones()]),
    mensaje: new FormControl('', [Validators.required, formularioValidaciones()]),
    pais: new FormControl('', [Validators.required])
  });

  get nombre() { return this.contactoForm.get('nombre') };
  get email() { return this.contactoForm.get('email') };
  get mensaje() { return this.contactoForm.get('mensaje') };
  get pais() { return this.contactoForm.get('pais') };

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  enviarMensaje() {
    alert('Su mensaje ha sido enviado con éxito');
    //aqui se deberia enviar la informacion por correo
    this.router.navigate(['/home']);
  }

}
