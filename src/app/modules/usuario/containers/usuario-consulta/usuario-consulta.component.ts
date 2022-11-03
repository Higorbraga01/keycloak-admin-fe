import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { LoadingBarService } from 'src/app/shared/services/loading-bar.service';

@Component({
  selector: 'app-usuario-consulta',
  templateUrl: './usuario-consulta.component.html',
  styleUrls: ['./usuario-consulta.component.scss']
})
export class UsuarioConsultaComponent implements OnInit {

  data: any[];

  constructor(private userService: UserService, private loading: LoadingBarService,) { }

  ngOnInit(): void {
    this.userService
      .buscarUsuariosPorRealm()
      .subscribe(
        (res) => this.data = res
      );
  }

  handleFilterEvent(formValue: any) {
    this.loading.start();
    console.log(formValue)
      this.userService
        .buscarUsuariosPorRealm(formValue)
        .subscribe((res) => {
          this.data = res;
          this.loading.end();
        });
    }

}
