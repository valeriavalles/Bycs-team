import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { promise } from 'selenium-webdriver';
import { Servicio } from 'src/app/model/servicio.cls';
import { ServicioModel } from 'src/app/model/servicio.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.css']
})
export class DefaultHomeComponent implements OnInit {
  projects = [];
  //Crear Objeto Lista de Servicios
  listservicios:Array<ServicioModel>=[];
  constructor(private readonly projectService: ProjectService, private ruta:Router) { }
 
 

  ngOnInit(): void {

  //Invoca al metodo que lista que los servicios
    this.listarservicios();
  }
  async listarservicios(): Promise <any> {
    this.listservicios = await this.projectService.getServicio().toPromise();
    
  }

  contactarServicio(servicio: Servicio){
    this.projectService.servicio= servicio
    console.log(servicio)
    this.ruta.navigateByUrl('dashboard/home/details')
  }
}

   /* this.listservicios = [{
      id              :1,     
      codServicio     :'G001', 
      tipoServicio    :'Gasfiteria',
      fechaServicio   :new Date(),
      monto           :100,
      obserServicio   :'Buen Servicio',
      detalleServicio :'Instalaciones de agua potable',
      departamento    :'Lima',
      ciudad          :'Lima', 
      distrito        :'San Miguel',
      direccion       :'Av. Universitaria', 
      idProfesional   :1,  
      idCliente       :1, 
      imgUrl          :'https://traemelo.com.pe/es/wp-content/uploads/2020/07/GASFITERIA.jpg'
    },

    {
      id              :1,     
      codServicio     :'G001', 
      tipoServicio    :'Gasfiteria',
      fechaServicio   :new Date(),
      monto           :100,
      obserServicio   :'Buen Servicio',
      detalleServicio :'Instalaciones de agua potable',
      departamento    :'Lima',
      ciudad          :'Lima', 
      distrito        :'San Miguel',
      direccion       :'Av. Universitaria', 
      idProfesional   :1,  
      idCliente       :1, 
      imgUrl          :'https://traemelo.com.pe/es/wp-content/uploads/2020/07/GASFITERIA.jpg'
    }
     
  ]*/
