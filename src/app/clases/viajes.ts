export class viaje {
    fecha:string;
    hora:string;
    estado:string;
    idCliente:number;
    monto:number;
    constructor(fecha:Date, hora:Date, idCliente:number, estado?:string){
        this.fecha = this.formatearFecha(fecha)
        this.hora = this.formatearHora(hora);
        this.idCliente = idCliente;
        this.estado = estado;
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