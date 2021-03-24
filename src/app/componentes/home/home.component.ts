import { Component, OnInit } from '@angular/core';
import { RickService } from '../../services/rick.service';
import { Home } from '../../interfaces/home';
import { Personaje } from '../../interfaces/personaje';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public todosPersonajes: Home[] =  [];
  public personaje: Personaje;
  public ocultar: boolean = false;

  constructor(
    private rickService : RickService
  ) { 
    rickService.getTodosPersonajes().subscribe(resp => {
      this.todosPersonajes = resp;
    })
  }

  ngOnInit(): void {
  }

  mostrarDetalle(id: number) {
    this.rickService.getPersonajeById(id).subscribe(resp => {
      this.personaje = resp;
      this.ocultar = false;
      console.log(this.personaje);
    })
  }

  ocultarDetalle(respuesta: boolean) {
    this.ocultar = respuesta;
  }

}
