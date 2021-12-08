import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 

  }
  sendCredentials(correo: string, password: string): Observable<any> {
    //console.log(correo)
    //console.log(password)
    let tiposervicio = " "
    let estado = " "
    const body = {
      correo,
      password,
      tiposervicio,
      estado
    }
    return this.http.post('https://localhost:44331/api/auth', body)

  }
}
