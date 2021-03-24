import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private loginS: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  mostrarBotonIniciarSesion(): boolean {
    let user = this.loginS.getCurrentUser();
      if (user != '' && user != null) {
      return false;
      } else {
        return true;
      }
  }

  mostrarBotonCerrarSesion(): boolean {
    let user = this.loginS.getCurrentUser();
      if (user != '' && user != null) {
      return true;
      } else {
        return false;
      }
  }

  cerrarSession() {
    this.loginS.cerrarSession();
    this.router.navigate(['/home']);
  }

}
