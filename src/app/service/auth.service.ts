import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(public rounter: Router) { }

  canActivate(): boolean {
    let token = localStorage.getItem('token');
    if (!token) {
      this.rounter.navigate(['login']);
      return false;
    }

    return true;
  }
}
