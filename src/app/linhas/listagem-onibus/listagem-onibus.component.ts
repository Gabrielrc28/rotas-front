import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-listagem-onibus',
  templateUrl: './listagem-onibus.component.html',
  styleUrls: ['./listagem-onibus.component.css']
})
export class ListagemOnibusComponent implements OnInit {

  linhas : any = [];
  searchValue! : string;
  page : any = 1;

  constructor(private apiService : ApiService, private router : Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.apiService.listarOnibus().subscribe(dados => this.linhas = dados);
  }
  onSelect(linha: any){
    this.router.navigate(['rota/',linha.id]);
  }
}
