import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public nacionalidades: any[] = ['Chilena', 'Extranjera'];

  public contactoForm = new FormGroup({
    nombre: new FormControl(),
    email: new FormControl(),
    mensaje: new FormControl(),
    nacionalidad: new FormControl()
  });

  get nombre() { return this.contactoForm.get('nombre')};
  get email() { return this.contactoForm.get('email')};
  get mensaje() { return this.contactoForm.get('mensaje')};

  constructor() { }

  ngOnInit(): void {
  }

  enviarMensaje () {
    alert('Su mensaje ha sido enviado con éxito');
  }

}
