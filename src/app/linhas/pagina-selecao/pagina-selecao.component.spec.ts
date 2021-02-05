import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSelecaoComponent } from './pagina-selecao.component';

describe('PaginaSelecaoComponent', () => {
  let component: PaginaSelecaoComponent;
  let fixture: ComponentFixture<PaginaSelecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaSelecaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaSelecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
