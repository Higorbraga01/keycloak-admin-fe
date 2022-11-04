import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private loading: LoadingBarService,
    private activitedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loading.start();
    this.id = this.activitedRoute.snapshot.params['id'];
    if (this.id) {
      this.userService
        .buscarUsuariosPorId(this.id)
        .subscribe((user) => (this.user = user));
        this.loading.end();
        this.blocked = false;
    }
  }
}
