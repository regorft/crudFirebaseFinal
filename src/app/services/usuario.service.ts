import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient ) { }

  userListaServer = 'http://jsonplaceholder.typicode.com'

  listarUserListaServer(){
    return this.http.get(`${this.userListaServer}/users`)
  }


}
