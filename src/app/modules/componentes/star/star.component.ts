import { Component, OnInit } from '@angular/core';
import { StarService } from '../../../services/star.service';
import { PersonajeStar } from '../../../interfaces/personaje-star';
import { Subject } from 'rxjs';
import { Star } from 'src/app/interfaces/star';
import { Location } from '@angular/common';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  public registro: Star;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private starS: StarService,
    private location: Location
  ) {
    starS.getTodosPersonajesTabla().subscribe(resp => {
      this.registro = resp;
      this.dtTrigger.next();
    })
  }

  volver() {
    this.location.back();
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu:  [[5, 10, 20, -1], [5, 10, 20, "Todos"]],
      language: {
        processing: "Procesando...",
        search: "Buscar:",
        lengthMenu: "Mostrar _MENU_ elementos",
        info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
        infoEmpty: "Mostrando ningún elemento.",
        infoFiltered: "(filtrado _MAX_ elementos total)",
        infoPostFix: "",
        loadingRecords: "Cargando registros...",
        zeroRecords: "No se encontraron registros",
        emptyTable: "No hay datos disponibles en la tabla",
        paginate: {
          first: "Primero",
          previous: "Anterior",
          next: "Siguiente",
          last: "Último"
        },
        aria: {
          sortAscending: ": Activar para ordenar la tabla en orden ascendente",
          sortDescending: ": Activar para ordenar la tabla en orden descendente"
        }
      }
    };
  }

}
