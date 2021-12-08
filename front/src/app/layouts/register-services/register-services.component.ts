import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Alert } from 'selenium-webdriver';
import { ServicioModel } from 'src/app/model/servicio.model';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-services',
  templateUrl: './register-services.component.html',
  styleUrls: ['./register-services.component.css']
})
export class RegisterServicesComponent implements OnInit {
  //Recuperar datos de la vista(html)
  formRegistrarService: FormGroup  = new FormGroup({});
  codigo: string = " ";
  //Referenciando al servicio
  constructor(private servicio:ProjectService) { }

  ngOnInit(): void {
    this.formRegistrarService = new FormGroup(

      {
     // codServicio: new FormControl('', [ Validators.required, Validators.minLength(2) ]),
      tipoServicio: new FormControl('', [ Validators.required, Validators.minLength(2) ]),
      obserServicio: new FormControl('', [ Validators.required, Validators.minLength(2) ]),
      detalleServicio: new FormControl('', [ Validators.required, Validators.minLength(2) ]),
      distrito: new FormControl('', [ Validators.required, Validators.minLength(2) ]),
      imgUrl: new FormControl('', [ Validators.required,Validators.minLength(2) ]),    
      })
      this.generaCodigo();
  }

//Metodo Registrar Servicio
registrarService(): void {
  console.log('FormRegistar Servicio', this.formRegistrarService.value)
  let id =  localStorage.getItem('id');
  let servicio: ServicioModel
  servicio = this.formRegistrarService.value
  servicio.codServicio = this.codigo;
  servicio.fechaServicio = new Date();
  servicio.monto = 0;
  servicio.ciudad = "Lima";
  servicio.departamento = "Lima";
  servicio.direccion = " ";
  servicio.idCliente = 0;
  servicio.idProfesional = parseInt(id);
  console.log(servicio)
  if(!this.formRegistrarService.invalid){
  this.servicio.saveService(servicio).subscribe((respuesta)=>{
  console.log(respuesta);
  this.formRegistrarService.reset();
  if(respuesta.codigomensaje="99")
  {
     Swal.fire(
      'Informativo!',
      respuesta.mensaje,
      'warning'
    )
  }else{
    Swal.fire(
      'Registrado!',
      'Se ha registrado correctamente!',
      'success'
    )
  }

  })
  this.generaCodigo();
  }else{
    Swal.fire(
      'Error!',
      'Completa los datos!',
      'error'
    )
  }
}
generaCodigo(){
   console.log("mensaje codigo servicio");
   let result = "SERV" + Math.floor(Math.random() * (10000 - 1)) + 1;;
   this.codigo = result;

}
}
