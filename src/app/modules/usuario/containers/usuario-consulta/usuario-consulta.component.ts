import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-usuario-consulta',
  templateUrl: './usuario-consulta.component.html',
  styleUrls: ['./usuario-consulta.component.scss']
})
export class UsuarioConsultaComponent implements OnInit {
  data: any[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService
      .buscarUsuariosPorRealm()
      .subscribe(
        (res) => this.data = res
      );
  }

}
