import { ApiService } from '../../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-onibus',
  templateUrl: './listagem-onibus.component.html',
  styleUrls: ['./listagem-onibus.component.css']
})
export class ListagemOnibusComponent implements OnInit {

  linhas : Array<any> | undefined;

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.apiService.listarOnibus().subscribe(dados => this.linhas = dados);
  }
}
