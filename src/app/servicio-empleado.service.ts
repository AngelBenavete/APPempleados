import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadoService {

  constructor() { }

  muestramensaje(mensaje:string){

    alert(mensaje);
  }
}
