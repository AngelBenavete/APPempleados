import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {
  titulo = 'Actualizar la actividad';
  constructor(private router:Router, private route:ActivatedRoute,private empleadoService: EmpleadoService) { }

  empleados:Empleado[]=[];
  ngOnInit(): void {
    this.empleados=this.empleadoService.empleados;

    this.accion=parseInt(this.route.snapshot.queryParams["accion"]);

    this.indice=this.route.snapshot.params["id"];
    let empleado:Empleado = this.empleadoService.encontrarEmpleado(this.indice);

    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  indice: number;
  accion: number;
/*
  actualizarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadoService.actualizarEmpleado(this.indice, miEmpleado)
    this.router.navigate([""]);
  }

  eliminarEmpleado(){
    this.empleadoService.eliminarEmpleado(this.indice);
    this.router.navigate([""]);
  }
*/
  accionEmpleado(){
    if(this.accion==1){

      let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

      this.empleadoService.actualizarEmpleado(this.indice, miEmpleado);
      this.router.navigate(["/"]);
      setTimeout(function reset() {
        location.reload();
      },300);
    }else{

      this.empleadoService.eliminarEmpleado(this.indice);
      this.router.navigate([""]);
    }
  }
}

