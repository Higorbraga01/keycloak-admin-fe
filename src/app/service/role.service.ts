import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(
    protected http: HttpClient,
    @Inject('API_ENDPOINT') private endpoint: string
  ) {}

  removeEmptyFields(data: any): void {
    Object.keys(data).forEach(
      (key) =>
        (data[key] === null ||
          data[key] === '' ||
          data[key] === undefined ||
          data[key].length === 0) &&
        delete data[key]
    );
  }

  buscarRolesUsuarioRealm(id: string) {
    return this.http.get<any[]>(`${this.endpoint}role/realm/FAB/user/${id}`);
  }

  buscarRolesDisponveisUsuarioRealm(id: string) {
    return this.http.get<any[]>(
      `${this.endpoint}role/avaliable/realm/FAB/user/${id}`
    );
  }

  adicionarRealmRolesUser(userId: string, roles: any[]) {
    return this.http.post<any[]>(
      `${this.endpoint}role/realm/FAB/user/${userId}`,
      roles
    );
  }

  removerRealmRolesUser(userId: string, roles: any[]) {
    return this.http.delete<any[]>(
      `${this.endpoint}role/realm/FAB/user/${userId}`,
      {
        body: roles,
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
    );
  }
}
