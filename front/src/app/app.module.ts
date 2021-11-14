import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
// import { ProjectsComponent } from './layouts/projects/projects.component';
// import { DetailsProjectComponent } from './layouts/details-project/details-project.component';
// import { RegistersComponent } from './layouts/registers/registers.component';
import { DefaultHomeComponent } from './layouts/default-home/default-home.component';
import { RegisterComponent } from './register/register.component';
import { PerfilComponent } from './layouts/perfil/perfil.component';
import { RegisterServicesComponent } from './layouts/register-services/register-services.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DefaultHomeComponent,
    RegisterComponent,
    PerfilComponent,
    RegisterServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
