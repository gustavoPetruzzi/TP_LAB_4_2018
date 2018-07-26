export class encuesta{
    idViaje:number;
    idRemisero:number;
    idVehiculo:number;
    remisero:number;
    estado_vehiculo:number;
    recomendacion:number;
    viaje:number;
    conductor:number;
    vehiculo:number;
    camino:number;
    reserva:number;
    cobranza:number;
    comentario:string;
    foto_1:string;
    foto_2:string;
    foto_3:string;
    constructor(idViaje:number, idRemisero:number, idVehiculo:number, remisero:number, estado_vehiculo:number, recomendacion:number, viaje:number, conductor:number, vehiculo:number, camino:number, reserva:number, cobranza:number, comentario:string, foto_1:string, foto_2:string, foto_3:string){
        this.idViaje = idViaje;
        this.idRemisero = idRemisero;
        this.idVehiculo = idVehiculo;
        this.remisero = remisero;
        this.estado_vehiculo = estado_vehiculo;
        this.recomendacion = recomendacion;
        this.viaje = viaje;
        this.conductor = conductor;
        this.vehiculo = vehiculo;
        this.camino = camino;
        this.reserva = reserva;
        this.cobranza = cobranza;
        this.comentario = comentario;
        this.foto_1 = foto_1;
        this.foto_2 = foto_2;
        this.foto_3 = foto_3;


    }
}