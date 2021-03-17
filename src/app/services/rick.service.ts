import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Home } from '../interfaces/home';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RickService {

  public listaPersonajes: number[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  getPersonajesAleatorio() {
    for (let index = 0; index < 5; index++) {
      this.listaPersonajes[index] = Math.floor(Math.random() * 671);
    }
  }

  getTodosPersonajes(): Observable<Home[]> {
    this.getPersonajesAleatorio();
    console.log(environment.urlServicio + this.listaPersonajes)
    return this.httpClient.get<Home[]>(environment.urlServicio + this.listaPersonajes);
  }
}