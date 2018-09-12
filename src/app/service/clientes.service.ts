import { Injectable } from '@angular/core';
import {apiUrl} from '../env'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {
  
  constructor(private http: HttpClient)  {}
  getClients(){
    return new Promise (resolve => {
      this.http.get(apiUrl + 'clientes/').subscribe(data => {console.log('data in service: ' + data)
      resolve(data);
    }, err => {console.log('error:'+ err)})
  })
}
}
