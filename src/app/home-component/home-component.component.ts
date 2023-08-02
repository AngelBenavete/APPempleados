import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  titulo = 'Listado de Empleados';
  today: number = Date.now();

  constructor(private empleadoService: EmpleadoService) {
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
  cuadroCargo:string="";
  cuadroSalario:number=0;

  empleados:Empleado[]=[];

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadoService.agregarEmpleadoService(miEmpleado);
  }
}
