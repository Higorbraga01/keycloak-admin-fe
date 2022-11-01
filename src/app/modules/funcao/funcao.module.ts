import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncaoConsultaComponent } from './containers/funcao-consulta/funcao-consulta.component';
import { RouterModule } from '@angular/router';
import { FUNCAO_ROUTES } from './funcao-routing.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';



@NgModule({
  declarations: [
    FuncaoConsultaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FUNCAO_ROUTES),
    TableModule,
    CardModule,
    ToolbarModule,
    ButtonModule,
  ]
})
export class FuncaoModule { }
