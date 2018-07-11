import { vehiculo } from './vehiculo';
export class remisero {
    id:number;
    nombre:string;
    apellido:string;
    usuario:string;
    vehiculo:number;
    password:string;

    constructor(nombre:string, apellido:string, usuario:string, vehiculo?:number ){
        if(vehiculo){
            this.vehiculo = vehiculo;
        }
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
    }
}