import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/auth/public-api';

import {environment} from '../../../environments/environment';
import { UsuarioConsultaContainerComponent } from './containers/usuario-consulta-container/usuario-consulta-container.component';
import { UsuarioConsultaComponent } from './containers/usuario-consulta/usuario-consulta.component';
import { UsuarioDetalheContainerComponent } from './containers/usuario-detalhe-container/usuario-detalhe-container.component';

export const routes: Routes = [
  {
    path: '',
    component: UsuarioConsultaContainerComponent,
    data: {
      roles: []
    },
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'listagem',
        component: UsuarioConsultaComponent,
      }
    ],
  },
  {
    path: ':id/detalhe',
    component: UsuarioDetalheContainerComponent,
    data: {
      roles: []
    },
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: '**',
    children: [],
    resolve: {
      url: 'externalUrlRedirectResolver',
    },
    data: {
      externalUrl: `${environment.FRONT_URL}`,
    },
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
