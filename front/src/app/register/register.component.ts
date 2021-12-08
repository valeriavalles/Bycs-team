import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioModel } from '../model/Usuario.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //Recuperar datos de la vista(html)
  formRegistrarUser: FormGroup  = new FormGroup({});
  //Referenciando al servicio
  constructor(private _usuarioservices:ProjectService, private ruta:Router) { }

  ngOnInit(): void {
    this.formRegistrarUser = new FormGroup(

      {
      nombres: new FormControl('', [ Validators.required, Validators.minLength(2)  ]),
      apellidos: new FormControl('', [ Validators.required, Validators.minLength(2)  ]),
      correo: new FormControl('', [ Validators.required,Validators.minLength(2)  ]),
      direccion: new FormControl('', [ Validators.required, Validators.minLength(2)  ]),
      tipousuario: new FormControl('', [ Validators.required, Validators.minLength(1)  ]),
      dni: new FormControl('', [ Validators.required, Validators.minLength(2)  ]),
      numeroceltel: new FormControl('', [ Validators.required, Validators.minLength(2)  ]),
      //tiposervicio: new FormControl('', [ Validators.required, Validators.minLength(2)  ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(2)  ])
      
      })
  }

  //Metodo Registrar Usuario
  registrarUser(): void {
    console.log('FormRegistar Usuario', this.formRegistrarUser.value)
    let usuario: UsuarioModel
    usuario = this.formRegistrarUser.value
    usuario.tiposervicio = " ";
    console.log(usuario)
    if(!this.formRegistrarUser.invalid){
    this._usuarioservices.saveUser(usuario).subscribe((responseOk)=>{
      localStorage.setItem('nombres', responseOk.nombres);
      localStorage.setItem('apellidos', responseOk.apellidos);
      localStorage.setItem('correo', responseOk.correo);
      localStorage.setItem('id', responseOk.id);
      console.log(responseOk);
    console.log(responseOk);
    this.formRegistrarUser.reset();
    Swal.fire(
      'Registrado!',
      'Se ha registrado correctamente!',
      'success'
    )
    this.ruta.navigateByUrl('dashboard')
    })
  }else{
    Swal.fire(
      'Error!',
      'Completa los datos!',
      'error'
    )
  }
  }

}
