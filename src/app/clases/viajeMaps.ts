import { viaje } from './viajes';
import { lugar } from './lugar';
import {  } from 'googlemaps';
export class viajeMaps extends viaje {
    fecha:string;
    hora:string;
    estado:string;
    idCliente:number;
    idRemisero:number;
    monto:number;
    origen:lugar;
    destino:lugar;
    distancia:number;
    premium:number;
    static readonly precio:number = 30;
    constructor(
        id:number,
        fecha:any, 
        hora:any, 
        estado:string, 
        idCliente: number,
        monto:number,
        origen:lugar,
        destino:lugar,
        premium:Boolean)
        {
            super(id,fecha,hora,idCliente,estado);
            this.origen = origen;
            this.destino = destino;
            this.premium = this.formatearPremium(premium);
            this.monto = parseFloat(this.calcularMonto());
        }
        
        public calcularDistancia(){
            let origenGoogle = new google.maps.LatLng(this.origen.latitud, this.origen.longitud);
            let destinoGoogle = new google.maps.LatLng(this.destino.latitud, this.destino.longitud);
            let distancia  = google.maps.geometry.spherical.computeDistanceBetween(origenGoogle, destinoGoogle);
            distancia = distancia / 1000;
            return distancia;
        }

        public calcularMonto(){
            return (viajeMaps.precio * this.calcularDistancia()).toFixed(2);
        }

        private formatearPremium(tipo:Boolean){
            if(tipo){
                return 1;
            }
            return 0;
        }



}

export const opcionesCancelar = ['Problemas personales', 'Demora del chofer', 'Otro'];
export const opcionesRechazar = ['Problemas personales', 'Problemas mecanicos', 'Otro'];