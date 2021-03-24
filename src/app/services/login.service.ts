import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  inicioSession(user: string, pass: string) {
    localStorage.setItem('user', user);
    localStorage.setItem('pass', pass);
  }

  getCurrentUser() {
    try {
      const user = localStorage.getItem('user');
      console.log('user: ' + user);
      return user;
    } catch (error) {
      console.log('error: ' + error);
    }
  }

  cerrarSession() {
    localStorage.removeItem('user');
    localStorage.removeItem('pass');
  }
}
