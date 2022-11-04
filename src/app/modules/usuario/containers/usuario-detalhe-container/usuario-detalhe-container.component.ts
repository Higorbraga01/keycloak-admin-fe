import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from 'src/app/service/role.service';
import { UserService } from 'src/app/service/user.service';
import { LoadingBarService } from 'src/app/shared/services/loading-bar.service';

@Component({
  selector: 'app-usuario-detalhe-container',
  templateUrl: './usuario-detalhe-container.component.html',
  styleUrls: ['./usuario-detalhe-container.component.scss'],
})
export class UsuarioDetalheContainerComponent implements OnInit {
  public id: string;
  public blocked: boolean = true;
  public user: any;
  public userRoles: any[] = [];
  public avaliableRoles: any[] = [];

  constructor(
    private loading: LoadingBarService,
    private activitedRoute: ActivatedRoute,
    private userService: UserService,
    private roleService: RoleService
  ) {}

  ngOnInit(): void {
    this.loading.start();
    this.id = this.activitedRoute.snapshot.params['id'];
    if (this.id) {
      this.userService
        .buscarUsuariosPorId(this.id)
        .subscribe((user) => (this.user = user));
      this.roleService
        .buscarRolesUsuarioRealm(this.id)
        .subscribe((userRoles) => (this.userRoles = userRoles));
      this.roleService
        .buscarRolesDisponveisUsuarioRealm(this.id)
        .subscribe((avaliableRoles) => (this.avaliableRoles = avaliableRoles));
      this.loading.end();
      this.blocked = false;
      setTimeout(() => {
        console.log(this.avaliableRoles[0]);
      }, 500);
    }
  }

  updateRole(event: any) {
    this.roleService
      .adicionarRealmRolesUser(this.id, this.userRoles)
      .subscribe((res) => console.log(res));
  }

  removeRole(event: any) {
    const rolesToBeRemoved: any[] = [];
    rolesToBeRemoved.push(...event.items)
    this.roleService
      .removerRealmRolesUser(this.id, rolesToBeRemoved)
      .subscribe((res) => console.log(res));
  }
}
