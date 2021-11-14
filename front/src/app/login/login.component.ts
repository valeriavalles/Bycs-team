import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
// import { FormGroup, FormControl, Validators } from '@an'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // constructor() { }
  constructor(private route:Router){}

  ngOnInit(): void {
  }


  submitPage(){
    // console.log('redirect ')
    this.route.navigate(['/dashboard']);
  }

  pageRegistro(){
    // console.log('redirect ')
    this.route.navigate(['/register']);
  }
}
