import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemLotacaoComponent } from './listagem-lotacao.component';

describe('ListagemLotacaoComponent', () => {
  let component: ListagemLotacaoComponent;
  let fixture: ComponentFixture<ListagemLotacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemLotacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemLotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
