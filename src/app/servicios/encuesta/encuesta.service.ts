import { Injectable } from '@angular/core';
import { NuevohttpService } from '../nuevohttp.service';
import {Observable } from 'rxjs';
import { encuesta } from '../../clases/encuesta';
@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor( public nuevohttp: NuevohttpService) { }

  public guardarEncuesta(guardada:encuesta){
    let token = localStorage.getItem('token');
    let datos = `idViaje=${guardada.idViaje}&idRemisero=${guardada.idRemisero}&idVehiculo=${guardada.idVehiculo}&remisero=${guardada.remisero}&estado_vehiculo=${guardada.estado_vehiculo}&recomendacion=${guardada.recomendacion}&viaje=${guardada.viaje}&conductor=${guardada.conductor}&vehiculo=${guardada.vehiculo}&camino=${guardada.camino}&reserva=${guardada.reserva}&cobranza=${guardada.cobranza}&comentario=${guardada.comentario}&foto_1=${guardada.foto_1}&foto_2=${guardada.foto_2}&foto_3=${guardada.foto_3}`;
    return this.nuevohttp.httpPostData('encuesta/nuevo', datos);
  }


  public buscar(idViaje:number){
    let token = localStorage.getItem('idViaje');
    let datos = `idViaje=${idViaje}`;
    return this.nuevohttp.httpPostData('encuesta/buscar', datos);
  }


}

