import { Linha } from './models/linha';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(Linha : Linha[], searchValue : string): Linha[]{

    if(!Linha || !searchValue){
      return Linha;
    }
    return Linha.filter(linha => linha.nome.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }
}
