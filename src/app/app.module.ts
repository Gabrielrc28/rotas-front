import { ApiService } from './api.service';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListagemOnibusComponent } from './linhas/listagem-onibus/listagem-onibus.component';
import { ListagemLotacaoComponent } from './linhas/listagem-lotacao/listagem-lotacao.component';
import { ListagemRotaComponent } from './linhas/listagem-rota/listagem-rota.component';

import { NavbarModule, WavesModule, ButtonsModule, CardsModule, TableModule, InputsModule, CollapseModule} from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './template_components/header/header.component';
import { FooterComponent } from './template_components/footer/footer.component';
import { PaginaSelecaoComponent } from './linhas/pagina-selecao/pagina-selecao.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBarcode, faFingerprint, faBus, faMapMarkedAlt, faSearch } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [
    AppComponent,
    ListagemOnibusComponent,
    ListagemLotacaoComponent,
    ListagemRotaComponent,
    HeaderComponent,
    FooterComponent,
    PaginaSelecaoComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    NgbModule,
    CardsModule,
    TableModule,
    FormsModule,
    InputsModule.forRoot(),
    FontAwesomeModule,
    CollapseModule,
    NgxPaginationModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (private library: FaIconLibrary){
    library.addIcons(faBarcode, faFingerprint, faBus, faMapMarkedAlt, faSearch);
  }
 }
