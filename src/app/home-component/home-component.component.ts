import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadoService } from '../empleado.service';
import { LoginService } from '../login.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  titulo = 'Agregue las Actividades';
  today: number = Date.now();

  constructor(private empleadoService: EmpleadoService, private loginService:LoginService, private Hora: DatePipe) {
    //this.empleados=this.empleadoService.empleados;
  }

  ngOnInit(): void {
    this.empleadoService.obtenerEmpleado().subscribe(misEmpleados=>{
      console.log(misEmpleados);

      this.empleados=Object.values(misEmpleados);
      this.empleadoService.getEmpleado(this.empleados);
    });
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string | null = this.Hora.transform(new Date(), 'MM/dd/yy, h:mm a');
  cuadroSalario:string="";

  empleados:Empleado[]=[];

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadoService.agregarEmpleadoService(miEmpleado);
  }

  login(){
    return this.loginService.getIdToken();
  }

  logout(){
    this.loginService.logout();
  }
}