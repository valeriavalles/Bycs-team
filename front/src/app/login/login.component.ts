import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { AuthService } from '../services/auth.service';
import { ProjectService } from '../services/project.service';
// import { FormGroup, FormControl, Validators } from '@an'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 errorSession: boolean = false
  formLogin: FormGroup = new FormGroup({});
  // constructor- injeccion de servicios etc
  constructor(private route:Router, private _usuarioService:ProjectService, private authService:AuthService ){}
 
  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ])
      }
    )
    this._usuarioService.getUser().subscribe((Response: string[]) => {
      console.log('Hola Bienvenido', Response)
    })
  }

  /*
  submitPage(){
    // console.log('redirect ')
    this.route.navigate(['/dashboard']);
  }*/
  sendLogin(): void {
    const { email, password } = this.formLogin.value

    this.authService.sendCredentials(email, password)
      .subscribe((responseOk) => { //TODO: Cuando el usuario credenciales Correctas ✔✔
        console.log('Session iniciada correcta', responseOk);
        console.log("Comentario ", responseOk.correo);
        const { tokenSession, data } = responseOk
        localStorage.setItem('nombres', responseOk.nombres);
        localStorage.setItem('apellidos', responseOk.apellidos);
        localStorage.setItem('correo', responseOk.correo);
        localStorage.setItem('id', responseOk.id);
        //console.log(responseOk);
       //console.log("Hola1 ", localStorage.getItem('datosdeusuario'));
       if(responseOk.estado == "1" ){
        this.route.navigate(['/dashboard']);
       }else{
         this.errorSession = true
       }
        
      },
        err => {//TODO error 400>=
       //   this.errorSession = true
          console.log('⚠⚠⚠⚠ Ocurrio error con tu email o password');
        })
  }

  pageRegistro(){
    // console.log('redirect ')
    this.route.navigate(['/register']);
  }
}
