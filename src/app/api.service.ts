import { Itinerario } from './models/itinerario';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private linhasOnibusUrl = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=o';

  private linhasLotacaoUrl = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=l';

  private itinerario = 'http://www.poatransporte.com.br/php/facades/process.php?a=il&p=';

  constructor(private http: HttpClient) { }

  listarOnibus() {
    return this.http.get<any[]>(`${this.linhasOnibusUrl}`);
  }

  listarLotacao() {
    return this.http.get<any[]>(`${this.linhasLotacaoUrl}`);
  }

  listarItinerario(id : Number) {
    return this.http.get<Itinerario>(`${this.itinerario+id}`);
  }
}
