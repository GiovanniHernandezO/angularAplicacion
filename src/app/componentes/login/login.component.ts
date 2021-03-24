import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formularioValidaciones } from '../../directivas/validaciones.directive';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

declare function nav(): any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginS: LoginService,
    private router: Router
  ) { }

  public loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, formularioValidaciones()]),
    pass: new FormControl('', [Validators.required, formularioValidaciones()])
  });

  get user() { return this.loginForm.get('user') };
  get pass() { return this.loginForm.get('pass') };

  ngOnInit() {
  }

  iniciarSession() {
    let userForm = this.loginForm.value.user;
    let passForm = this.loginForm.value.pass;

    if (userForm != null && passForm != null) {
      this.loginS.inicioSession(userForm, passForm);
      this.router.navigate(['/home']);
    }
  }

}
