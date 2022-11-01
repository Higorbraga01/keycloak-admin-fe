import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenu } from 'primeng/tabmenu';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-usuario-consulta-container',
  templateUrl: './usuario-consulta-container.component.html',
  styleUrls: ['./usuario-consulta-container.component.scss']
})
export class UsuarioConsultaContainerComponent implements OnInit {
  public blockedDocument: any;
  _breadcrumbItems: MenuItem[];
  _home: MenuItem;
  _tabMenuItems: any;
  _activeTabMenuItem: MenuItem;
  items: MenuItem[];
  @ViewChild('tabMenuItem') private _tabMenu: TabMenu;
  constructor() { }

  ngOnInit(): void {
    this._breadcrumbItems = [{ label: 'USUÁRIOS', disabled: false }];
    this._home = {
      icon: 'pi pi-home',
      url: environment.FRONT_URL,
    };
    this._tabMenuItems = [
      {
        label: 'Listagem de usuários',
        routerLink: ['/usuario/listagem'],
      }
    ];
  }

  handleBreadcrumbClick(e: any) {
    if (!e.item.icon) {
      this._breadcrumbItems[
        this._breadcrumbItems.indexOf(e.item)
      ].disabled = true;
    }
  }

  handleMenuClick() {
    if (this._activeTabMenuItem !== this._tabMenu.activeItem) {
      this._activeTabMenuItem = this._tabMenu.activeItem;
    }
  }

}
