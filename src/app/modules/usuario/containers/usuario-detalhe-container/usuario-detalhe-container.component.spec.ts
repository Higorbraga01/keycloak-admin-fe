import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDetalheContainerComponent } from './usuario-detalhe-container.component';

describe('UsuarioDetalheContainerComponent', () => {
  let component: UsuarioDetalheContainerComponent;
  let fixture: ComponentFixture<UsuarioDetalheContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioDetalheContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioDetalheContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
