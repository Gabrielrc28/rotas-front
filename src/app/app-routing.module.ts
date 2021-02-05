import { ListagemLotacaoComponent } from './linhas/listagem-lotacao/listagem-lotacao.component';
import { ListagemOnibusComponent } from './linhas/listagem-onibus/listagem-onibus.component';
import { PaginaSelecaoComponent } from './linhas/pagina-selecao/pagina-selecao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemRotaComponent } from './linhas/listagem-rota/listagem-rota.component';

const routes: Routes = [
  {path: '', component: PaginaSelecaoComponent},
  {path: 'lista-onibus', component: ListagemOnibusComponent},
  {path: 'lista-lotacao', component: ListagemLotacaoComponent},
  {path: 'rota/:id', component: ListagemRotaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
