import { lugar } from './lugar';
export interface Iviaje{
    id:number;
    origen_lat:number;
    origen_long:number;
    destino_lat:number;
    destino_long:number;
    fecha:string;
    hora:string;
    estado:string;
    idRemisero:number;
    idCliente:number;
    monto:number;
    premium:Boolean;

}