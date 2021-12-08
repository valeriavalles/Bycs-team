import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../model/servicio.cls';
import { ServicioModel } from '../model/servicio.model';
import { UsuarioModel } from '../model/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private readonly http: HttpClient) { }
  servicio:Servicio= new Servicio();
   getUser() {
     //Invoca Servicio rest
     return this.http.get('https://localhost:44331/api/user');
    
   }
  saveUser(usuario: UsuarioModel): Observable<any> {
    console.log("error de errror ", usuario);
    return this.http.post('https://localhost:44331/api/user', usuario);
  }

  getServicio():Observable<any> {
    return this.http.get('https://localhost:44331/api/servicio');
  }

  saveService(servicio: ServicioModel): Observable<any> {
    /*const servicioc = {
      "codServicio": "GTUR35664",
      "tipoServicio": "Hola",
      "fechaServicio": "2021-11-27",
      "monto": 100,
      "obserServicio": "Buen Trabajo",
      "detalleServicio": "Arreglo de carros",
      "departamento": "Lima",
      "ciudad": "Lima",
      "distrito": "Los Olivos",
      "direccion": "Av. Beta",
      "idProfesional": 1,
      "idCliente": 1,
      "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmvMOoTswXQO5jErNf9q7Q1_ZaReseG6-cOb5r7Jie1IjrVImEUvq2Wv-5gC2lhQJZi0&usqp=CAU"
    }*/
    console.log("error de errror ", servicio);
    return this.http.post('https://localhost:44331/api/servicio', servicio);
  }
}

// saveSolicitud(solicitud: ServicioModel): Observable<any> {
//   /*const servicioc = {
//     "codServicio": "GTUR35664",
//     "tipoServicio": "Hola",
//     "fechaServicio": "2021-11-27",
//     "monto": 100,
//     "obserServicio": "Buen Trabajo",
//     "detalleServicio": "Arreglo de carros",
//     "departamento": "Lima",
//     "ciudad": "Lima",
//     "distrito": "Los Olivos",
//     "direccion": "Av. Beta",
//     "idProfesional": 1,
//     "idCliente": 1,
//     "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmvMOoTswXQO5jErNf9q7Q1_ZaReseG6-cOb5r7Jie1IjrVImEUvq2Wv-5gC2lhQJZi0&usqp=CAU"
//   }*/
//   console.log("error de errror ",solicitud);
//   return this.http.post('https://localhost:44331/api/solicitud/registrar', solicitud);
// }
// }