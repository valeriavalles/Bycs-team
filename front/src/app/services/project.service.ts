import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private readonly http: HttpClient) { }

  // getProject() {
  //   return this.http.get('/api/project/GetProject');
  // }

  // getNoticia(){
  //   return this.http.get('https://localhost:44309/api/Noticias/GetNoticia')
  //  }

  getUser() {
    //Invoca Servicio rest
    return this.http.get('https://localhost:44331/api/user');
   
  }
  // saveUser(usuario: UsuarioModel): Observable<any> {
  //   console.log("eror de errror ", usuario);
  //   return this.http.post('https://localhost:44331/api/user', usuario);
  // }

  // getServicio():Observable<any> {
  //   return this.http.get('https://localhost:44331/api/servicio');
  // }
}