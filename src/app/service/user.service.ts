import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: User;

  get user(): User {
    return this._user;
  }

  set user(user: User) {
    this._user = user;
  }

  constructor(
    protected http: HttpClient,
    @Inject('API_ENDPOINT') private endpoint: string
  ) {
    //Em produção retirar o usuário mocado e criar o recurso user no back end
    this._user = {
      id: 1,
      nome: 'usuario teste',
      nrCpf: '12345678910',
      organizacao: {
        nome: 'Organização',
        sigla: 'ORG',
        cdOrg: '1234567'
      },
      roles: ['regra1', 'regra2']
    };
  }
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

  getCurrentUser(): Observable<any> {
    return of(this._user);
    //return this.http.get<any>(`${this.endpoint}/user`);
  }

  buscarUsuariosPorRealm(filters: any = {}): Observable<any[]> {
    this.removeEmptyFields(filters);
    const searchParams = new HttpParams({ fromObject: filters });
    return this.http.get<any[]>(`${this.endpoint}user/realm/FAB`, {params: searchParams});
  }
}
