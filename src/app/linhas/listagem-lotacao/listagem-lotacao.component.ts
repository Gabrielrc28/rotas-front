import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-listagem-lotacao',
  templateUrl: './listagem-lotacao.component.html',
  styleUrls: ['./listagem-lotacao.component.css']
})
export class ListagemLotacaoComponent implements OnInit {

  linhas : any = [];
  searchValue! : string;
  page : any = 1;

  constructor(private apiService : ApiService, private router : Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.apiService.listarLotacao().subscribe(dados => this.linhas = dados);
  }

  onSelect(linha: any){
    this.router.navigate(['rota/',linha.id]);
  }
}
