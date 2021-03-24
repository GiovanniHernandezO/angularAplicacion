import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Star } from '../interfaces/star';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getTodosPersonajesTabla(): Observable<Star> {
    return this.httpClient.get<Star>(environment.urlServicioStar);
  }
}
