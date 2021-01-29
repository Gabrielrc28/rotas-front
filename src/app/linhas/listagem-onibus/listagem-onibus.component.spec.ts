import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemOnibusComponent } from './listagem-onibus.component';

describe('ListagemOnibusComponent', () => {
  let component: ListagemOnibusComponent;
  let fixture: ComponentFixture<ListagemOnibusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemOnibusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemOnibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
