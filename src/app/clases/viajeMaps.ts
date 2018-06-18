import { viaje } from './viajes';
import { lugar } from './lugar';
import {  } from 'googlemaps';
export class viajeMaps extends viaje {
    fecha:string;
    hora:string;
    estado:string;
    idCliente:number;
    monto:number;
    origen:lugar;
    destino:lugar;
    distancia:number;

    constructor(
        fecha:string, 
        hora:string, 
        estado:string, 
        idCliente: number,
        monto:number,
        origen:lugar,
        destino:lugar)
        {
            super(fecha,hora,idCliente,estado);
            this.origen = origen;
            this.destino = destino;
        }
        
        public calcularDistancia(){
            let origenGoogle = new google.maps.LatLng(this.origen.latitud, this.origen.longitud);
            let destinoGoogle = new google.maps.LatLng(this.destino.latitud, this.destino.longitud);
            let distancia  = google.maps.geometry.spherical.computeDistanceBetween(origenGoogle, destinoGoogle);
            this.distancia = distancia / 1000;                       
        }

        public calcularMonto(){
            let origenGoogle = new google.maps.LatLng(this.origen.latitud, this.origen.longitud);
            let destinoGoogle = new google.maps.LatLng(this.destino.latitud, this.destino.longitud);
            let monto = google.maps.geometry.spherical.computeDistanceBetween(origenGoogle, destinoGoogle);
        }


}