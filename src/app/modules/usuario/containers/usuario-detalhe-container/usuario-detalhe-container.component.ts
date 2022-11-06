import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';
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
  public userClientRoles: any [] = [];
  public avaliableRoles: any[] = [];
  public avaliableClientRoles: any[] = [];
  public clients: any[] = []
  public clientId: string;
  public clientSelected: boolean = true;

  constructor(
    private loading: LoadingBarService,
    private activitedRoute: ActivatedRoute,
    private userService: UserService,
    private roleService: RoleService,
    private clientService: ClientService
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
      this.clientService.buscarClientsDoRealm("FAB").subscribe((res) => this.clients = res);
      this.loading.end();
      this.blocked = false;
    }
  }

  updateRole(event: any) {
    this.roleService
      .adicionarRealmRolesUser(this.id, this.userRoles)
      .subscribe();
  }

  removeRole(event: any) {
    const rolesToBeRemoved: any[] = [];
    rolesToBeRemoved.push(...event.items)
    this.roleService
      .removerRealmRolesUser(this.id, rolesToBeRemoved)
      .subscribe();
  }

  updateClientRole(event: any) {
    this.roleService
      .adicionarClientRolesUser("FAB",this.id, this.clientId, this.userClientRoles)
      .subscribe();
  }

  removeClientRole(event: any) {
    const rolesToBeRemoved: any[] = [];
    rolesToBeRemoved.push(...event.items)
    this.roleService
      .removerClientRolesUser("FAB",this.id, this.clientId, rolesToBeRemoved)
      .subscribe();
  }

  handleClientSelect(clientId: any) {
    this.clientId = clientId;
    this.roleService
      .buscarRolesDisponiveisUsuarioClient("FAB", this.id, this.clientId)
      .subscribe((rolesDisponiveis) => {
        this.avaliableClientRoles = rolesDisponiveis;
    })
    this.roleService
      .buscarRolesUsuarioClient("FAB", this.id, clientId)
      .subscribe((res) => this.userClientRoles  = res);
    }
}
