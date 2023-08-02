import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadoService } from './servicio-empleado.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private miServicio:ServicioEmpleadoService, private dataService:DataService) {}

  empleados:Empleado[]=[];
/*
  empleados:Empleado[]=[
    new Empleado("Angel", "Benavente", "Dueño", 2500),
    new Empleado("Anna", "Perez", "Directora", 1500),
    new Empleado("Maria", "Lopez", "Jefa", 800),
    new Empleado("Laura", "Gonzalez", "Administrativo", 500),
  ];
*/

  obtenerEmpleado(){
    return this.dataService.cargarEmpleado(); // Observable
  }

  getEmpleado(misEmpleados:Empleado[]){
    this.empleados=misEmpleados;
  }

  agregarEmpleadoService(empleado:Empleado){
    this.miServicio.muestramensaje("Nombre del Empleado: " + empleado.nombre +"\n" +
    "Salario: " + empleado.salario);

    this.empleados.push(empleado); //array
    this.dataService.guardarEmpleado(this.empleados); // database
  }

  encontrarEmpleado(indice:number){
    let empleado:Empleado = this.empleados[indice];
    return empleado;
  }

  actualizarEmpleado(indice:number, empleado:Empleado){
    let empleadoModificado = this.empleados[indice];

    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;

    this.dataService.actualizarEmpleado(indice, empleado);
    this.miServicio.muestramensaje("Actualizado!!");
  }

  eliminarEmpleado(indice:number){
    this.empleados.splice(indice,1);
    this.dataService.eliminarEmpleado(indice);

    if(this.empleados!=null){
      this.dataService.guardarEmpleado(this.empleados);
    }

    this.miServicio.muestramensaje("Eliminado");
  }
}

