import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcao-consulta',
  templateUrl: './funcao-consulta.component.html',
  styleUrls: ['./funcao-consulta.component.scss']
})
export class FuncaoConsultaComponent implements OnInit {

  public funcoes: any[] = [
    { nome: 'Função 1', sigla: 'F1', descricao: 'Descrição 1' },
    { nome: 'Função 2', sigla: 'F2', descricao: 'Descrição 2' },
    { nome: 'Função 3', sigla: 'F3', descricao: 'Descrição 3' },
    { nome: 'Função 4', sigla: 'F4', descricao: 'Descrição 4' },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
