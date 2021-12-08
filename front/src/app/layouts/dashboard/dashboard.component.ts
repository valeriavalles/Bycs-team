import { Component, OnInit } from '@angular/core';
import { ServicioModel } from 'src/app/model/servicio.model';
import { Usuario } from 'src/app/model/usuario.cls';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
servicelist: Array<ServicioModel>=[]
usuario: Usuario;
nombres: string;
  constructor(private _servicio:ProjectService) { }

  ngOnInit(): void {
    this.nombres = localStorage.getItem('nombres');
  //  console.log(" estoy aqui", nombres); 
   // this.usuario.nombres = nombres;

    //console.log("Holaaa", localStorage.getItem('datosdeusuario'));
    this._servicio.getServicio().subscribe((data:ServicioModel[]) =>{
    this.servicelist = data;
         
     // console.log("Sueño",this.servicelist);
    });
  }
 
}
