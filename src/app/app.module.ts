import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaracteristicasNietoComponent } from './caracteristicas-nieto/caracteristicas-nieto.component';
import { ServicioEmpleadoService } from './servicio-empleado.service';
import { EmpleadoService } from './empleado.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './login/login-guardian';

const appRoutes:Routes=[
  {path: "", component:HomeComponentComponent, canActivate:[LoginGuardian]},
  {path: "quienes", component:QuienesComponentComponent, canActivate:[LoginGuardian]},
  {path: "contacto", component:ContactoComponentComponent, canActivate:[LoginGuardian]},
  {path: "actualizar/:id", component:ActualizaComponentComponent, canActivate:[LoginGuardian]},
  {path: "login", component:LoginComponent},
  {path: "**", component:ErrorPersonalizadoComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasNietoComponent,
    HomeComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent,
    ErrorPersonalizadoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ServicioEmpleadoService, EmpleadoService, DataService, LoginService, CookieService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
