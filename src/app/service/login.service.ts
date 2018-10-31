import { Injectable } from '@angular/core';
import { apiUrl } from '../env';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  login(user) {
    return new Promise(resolve => {
      return this.http.post<User>(apiUrl + 'token/', user).subscribe(data => {
        resolve(data)
      }, err => {
        console.log('ERRO' + err)
        resolve(err.error)
      })
    })
  }
}
