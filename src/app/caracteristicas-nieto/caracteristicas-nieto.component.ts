import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-caracteristicas-nieto',
  templateUrl: './caracteristicas-nieto.component.html',
  styleUrls: ['./caracteristicas-nieto.component.css']
})
export class CaracteristicasNietoComponent implements OnInit {

  @Output() caracteristicasEmpleado = new EventEmitter<string>();

  constructor(private miServicio: ServicioEmpleadoService){}

  ngOnInit(): void {
  }

  agregaCaracteristicas(value: string){
    this.miServicio.muestramensaje("Caracteristica: " + value);
    this.caracteristicasEmpleado.emit(value);
  }

}

