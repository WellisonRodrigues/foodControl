import { ClientesService } from '../../service/clientes.service';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-clientes-cadastro',
  templateUrl: './clientes-cadastro.component.html',
  styleUrls: ['./clientes-cadastro.component.css']
})
export class ClientesCadastroComponent implements OnInit {
  sucesso = false;
  cliente = {  nome: '', cpf: '', email: '', telefone: '' }

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
  }

  cadastrarCliente() {
    if (this.clientesService.insertClients(this.cliente).subscribe(cliente => this.cliente))
      this.sucesso = true;
  }
  limpar() {
    this.cliente = { nome: '', cpf: '', email: '', telefone: '' }
    this.sucesso = false;
  }
}
