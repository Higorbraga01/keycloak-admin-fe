import { FuncaoConsultaComponent } from './containers/funcao-consulta/funcao-consulta.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import {AuthGuard} from '../../../auth/lib/guards/auth.guard';
import {environment} from '../../../environments/environment';

export const FUNCAO_ROUTES: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: FuncaoConsultaComponent,
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
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FuncaoRoutingModule { }
