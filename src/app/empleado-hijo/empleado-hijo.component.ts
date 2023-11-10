import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { LoginService } from '../login.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent implements OnInit {

  @Input() empleado:Empleado;
  @Input() indice:number;

  constructor(private loginService:LoginService, private dataService:DataService) { }

  ngOnInit(): void {
  }

  arrayCaracteristicas = [''];

  agregarCaractersitica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
    // this.dataService.guardarComentario(this.arrayCaracteristicas);
  }

  login(){
    return this.loginService.getIdToken();
  }

  logout(){
    this.loginService.logout();
  }
}
