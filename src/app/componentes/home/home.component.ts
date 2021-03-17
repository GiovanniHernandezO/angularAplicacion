import { Component, OnInit } from '@angular/core';
import { RickService } from '../../services/rick.service';
import { Home } from '../../interfaces/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public todosPersonajes: Home[] =  [];

  constructor(
    private rickService : RickService
  ) { 
    rickService.getTodosPersonajes().subscribe(resp => {
      this.todosPersonajes = resp;
    })
  }

  ngOnInit(): void {
  }

}
