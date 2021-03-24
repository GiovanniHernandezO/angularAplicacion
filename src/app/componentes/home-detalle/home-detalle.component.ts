import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personaje';
import { RickService } from '../../services/rick.service';

@Component({
  selector: 'app-home-detalle',
  templateUrl: './home-detalle.component.html',
  styleUrls: ['./home-detalle.component.css']
})
export class HomeDetalleComponent implements OnInit {

  @Input() personaje: Personaje;
  @Output() ocultarDetallePersonaje = new EventEmitter();

  constructor(

  ) { }

  ngOnInit() {
  }

  existePersonaje(): boolean {
    return this.personaje != null;
  }

  ocultar() {
    this.ocultarDetallePersonaje.emit(true);
  }

}
