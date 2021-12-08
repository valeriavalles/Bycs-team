import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { Servicio } from 'src/app/model/servicio.cls';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-solicitar-servicio',
  templateUrl: './solicitar-servicio.component.html',
  styleUrls: ['./solicitar-servicio.component.css']
})
export class SolicitarServicioComponent implements OnInit {
  servicio:Servicio
  formConfirmSolicitu:FormGroup
  
  constructor(private projectServicio: ProjectService) { }

  ngOnInit(): void {
    this.servicio=this.projectServicio.servicio
    this.formConfirmSolicitu= new FormGroup({
      codServicio: new FormControl('', [Validators.required])
    })
  }
 
  //Metodo confimar (Contactar)
  confirmarSolicitud(){
    let valor = this.servicio.codServicio 
    console.log("valor :::: ",valor); 
    //llamar servicio
    
  }


}
