export class viaje {
    fecha:string;
    hora:string;
    estado:string;
    idCliente:number;
    monto:number;
    id:number;
    constructor(id:number,fecha:any, hora:any, idCliente:number, estado?:string){
        if( typeof(fecha)=== "string" && typeof(hora) === "string"){
            this.fecha = fecha;
            this.hora = hora;
        }
        else{
            this.fecha = this.formatearFecha(fecha)
            this.hora = this.formatearHora(hora);            
        }
        this.idCliente = idCliente;
        this.estado = estado;
        this.id = id;
    }
    private formatearFecha(fecha:Date){
        let formateada = fecha.getUTCFullYear() + '-' +
                ('00' + (fecha.getUTCMonth() + 1)).slice(-2) + '-' +
                ('00' + fecha.getUTCDate()).slice(-2) + ' ' +
                ('00' + fecha.getUTCHours()).slice(-2) + ':' +
                ('00' + fecha.getUTCMinutes()).slice(-2) + ':' +
                ('00' + fecha.getUTCSeconds()).slice(-2); 
        formateada = formateada.split(' ')[0];
        return formateada;
    }

    private formatearHora(hora:Date){
        let horaFormateada = hora.toTimeString().split(' ')[0];
        return horaFormateada;
    }
}