import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-listagem-lotacao',
  templateUrl: './listagem-lotacao.component.html',
  styleUrls: ['./listagem-lotacao.component.css']
})
export class ListagemLotacaoComponent implements OnInit {

  linhas : Array<any> | undefined;

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.apiService.listarLotacao().subscribe(dados => this.linhas = dados);
  }
}
