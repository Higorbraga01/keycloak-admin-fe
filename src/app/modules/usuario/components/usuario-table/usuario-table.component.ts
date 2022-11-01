import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-table',
  templateUrl: './usuario-table.component.html',
  styleUrls: ['./usuario-table.component.scss']
})
export class UsuarioTableComponent implements OnInit {
  @Input() data: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
