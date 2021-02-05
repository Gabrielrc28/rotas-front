import { Coord } from './../../models/coord';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listagem-rota',
  templateUrl: './listagem-rota.component.html',
  styleUrls: ['./listagem-rota.component.css']
})
export class ListagemRotaComponent implements OnInit {

  rota: any;
  coords: Array<Coord> = [];
  coord! : Coord;
  id: number = 0;

  constructor(private apiService : ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.listar();
  }

  listar() {
    this.apiService.listarItinerario(this.id).subscribe((rota : any) => {this.rota = rota
      for(var i = 0; i <Object.keys(rota).length -3; i++){
        this.coord = new Coord(rota[i].lat, rota[i].lng)
        this.coords.push(this.coord);
      }
      this.rota.coord = this.coords;
    });
  }
}
