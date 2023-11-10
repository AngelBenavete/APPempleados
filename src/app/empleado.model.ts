export class Empleado{

    constructor(nombre:string, apellido:string, cargo:string | null, salario:string){
        this.nombre= nombre;
        this.apellido= apellido;
        this.cargo= cargo;
        this.salario= salario;
    }

    nombre: string="";
    apellido: string="";
    cargo: string | null="";
    salario: string="";
}