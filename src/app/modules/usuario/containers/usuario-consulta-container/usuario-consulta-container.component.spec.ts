import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioConsultaContainerComponent } from './usuario-consulta-container.component';

describe('UsuarioConsultaContainerComponent', () => {
  let component: UsuarioConsultaContainerComponent;
  let fixture: ComponentFixture<UsuarioConsultaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioConsultaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioConsultaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
