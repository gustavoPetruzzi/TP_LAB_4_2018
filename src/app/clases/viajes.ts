export class viaje {
    fecha:string;
    hora:string;
    estado:string;
    idCliente:number;
    monto:number;
    constructor(fecha:string, hora:string, idCliente:number, estado?:string){
        this.fecha = fecha;
        this.hora = hora;
        this.idCliente = idCliente;
        this.estado = estado;
    }


}