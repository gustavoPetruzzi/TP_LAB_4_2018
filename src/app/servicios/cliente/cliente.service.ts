import { Injectable } from '@angular/core';
import { NuevohttpService } from '../nuevohttp.service';
import {  } from '../../clases/';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(public nuevoHttp: NuevohttpService) { }

  public nuevoViaje(viaje: viajeMaps){
  	let token = localStorage.getItem('token');
  	let datos = `idCliente=${viaje.idCliente}
  				 &origen_lat=${viaje.origen.latitud}
  				 &origen_long=${viaje.origen.longitud}
  				 &destino_lat=${viaje.destino.latitud}
  				 &destino_long=${viaje.destino.longitud}
  				 &fecha=${viaje.fecha}
  				 &hora=${viaje.hora}
  				 &token=${token}`;
  	//????
  	return this.nuevohttp.httpPostData("cliente/viajes", datos);
  }
}
