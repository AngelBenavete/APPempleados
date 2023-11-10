import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { LoginService } from './login.service';
// import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient, private loginService: LoginService) { }

  cargarEmpleado(){
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://mis-clientes-5cc2a-default-rtdb.firebaseio.com/datos.json?auth='+ token);
  }

  guardarEmpleado(empleado:Empleado[]){
    const token = this.loginService.getIdToken();
    this.httpClient.put('https://mis-clientes-5cc2a-default-rtdb.firebaseio.com/datos.json?auth='+token,empleado).subscribe(

      response=> console.log("Se han guadado los empleados: " + response),
      error=> console.log("Error: " + error),
    );
  }

  // guardarComentario(arrayCaracteristicas:EmpleadoHijoComponent["arrayCaracteristicas"]){
  //   this.httpClient.put('https://mis-clientes-5cc2a-default-rtdb.firebaseio.com/datos.json',arrayCaracteristicas).subscribe(

  //     response=> console.log("Se han guadado el comentario: " + response),
  //     error=> console.log("Error: " + error),
  //   );
  // }

  actualizarEmpleado(indice:number, empleado:Empleado){
    const token = this.loginService.getIdToken();
    let url = 'https://mis-clientes-5cc2a-default-rtdb.firebaseio.com/datos/' + indice + '.json?auth='+token

    this.httpClient.put(url,empleado).subscribe(

      response=> console.log("Se ha actualizado el empleado: " + response),
      error=> console.log("Error: " + error),
    );
  }

  eliminarEmpleado(indice:number){
    const token = this.loginService.getIdToken();
    let url = 'https://mis-clientes-5cc2a-default-rtdb.firebaseio.com/datos/' + indice + '.json?auth='+token

    this.httpClient.delete(url).subscribe(

      response=> console.log("Se ha elimiinado el empleado: " + response),
      error=> console.log("Error: " + error),
    );  
  }
}
