import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  private estadoLogin: boolean;

  constructor(
    private loginS: LoginService,
    private router: Router
  ) {  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let user = this.loginS.getCurrentUser();
      if (user != '' && user != null) {
        this.estadoLogin = true;
      } else {
        this.estadoLogin = false;
        alert('No ha iniciado sesión para ingresar a esta opción');
        this.router.navigate(['/login']);
      }
    return this.estadoLogin;
  }
  
}
