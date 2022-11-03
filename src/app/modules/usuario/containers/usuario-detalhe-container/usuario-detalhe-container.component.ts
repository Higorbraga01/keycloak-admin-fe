import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingBarService } from 'src/app/shared/services/loading-bar.service';

@Component({
  selector: 'app-usuario-detalhe-container',
  templateUrl: './usuario-detalhe-container.component.html',
  styleUrls: ['./usuario-detalhe-container.component.scss']
})
export class UsuarioDetalheContainerComponent implements OnInit {

  public id: number;
  public blocked: boolean = true;

  constructor(
    private loading: LoadingBarService,
    private activitedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.activitedRoute.snapshot.params['id'];
    this.blocked = false;
  }

}
