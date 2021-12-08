import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { PerfilComponent } from './layouts/perfil/perfil.component';
import { RegisterServicesComponent } from './layouts/register-services/register-services.component';
import { DefaultHomeComponent } from './layouts/default-home/default-home.component';
import { SolicitarServicioComponent } from './layouts/solicitar-servicio/solicitar-servicio.component';
import { DetallsServiceComponent } from './layouts/detalls-service/detalls-service.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';


const routes: Routes = [
  // { path:'', component:LoginComponent},
  { path:'dashboard', 
    component:DashboardComponent,
    children :[
      {
        path:'', 
        component: DefaultHomeComponent,
      },
      {
        path:'home', 
        component: DefaultHomeComponent,
      },
      {
        path:'perfil', 
        component: PerfilComponent,
        // children: [{
        //   path: 'details',
        //   component: DetailsProjectComponent,
        // }]
      },
      {
        path: 'home/:details',
        component: DetallsServiceComponent,
      },
      {
        path:'services', 
        component: RegisterServicesComponent,
      },
      {
        path:'solicitudes', 
        component: SolicitudesComponent,
      },
      {
       path:'contactar',  //Define la ruta
       component: SolicitarServicioComponent,
      }
      
    ] },

  { path:'login', component:LoginComponent},
  { path:'register', component: RegisterComponent},

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
