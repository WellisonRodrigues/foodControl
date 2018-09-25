import { Injectable } from '@angular/core';
import { apiUrl } from '../env'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  constructor(private http: HttpClient) { }

  insertClients(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(apiUrl + 'clientes/', cliente)
  }
  getClients() {
    return new Promise(resolve => {
      this.http.get(apiUrl + 'clientes/').subscribe(data => {
        console.log('data in service: ' + data)
        resolve(data);
      }, err => { console.log('error:' + err) })
    })
  }
}
