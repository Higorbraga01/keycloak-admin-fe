import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncaoConsultaComponent } from './funcao-consulta.component';

describe('FuncaoConsultaComponent', () => {
  let component: FuncaoConsultaComponent;
  let fixture: ComponentFixture<FuncaoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncaoConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncaoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
