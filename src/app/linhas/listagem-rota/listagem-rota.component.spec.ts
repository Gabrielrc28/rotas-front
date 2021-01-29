import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemRotaComponent } from './listagem-rota.component';

describe('ListagemRotaComponent', () => {
  let component: ListagemRotaComponent;
  let fixture: ComponentFixture<ListagemRotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemRotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemRotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
