import { Injectable } from '@angular/core';
import { NuevohttpService } from '../nuevohttp.service';
import { viajeMaps } from '../../clases/viajeMaps';
import {  } from '../../clases/';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(public nuevoHttp: NuevohttpService) { }

  public nuevoViaje(viaje: viajeMaps){
  	let token = localStorage.getItem('token');
		let datos = 
				`idCliente=${viaje.idCliente}
  				 &origen_lat=${viaje.origen.latitud}
  				 &origen_long=${viaje.origen.longitud}
  				 &destino_lat=${viaje.destino.latitud}
  				 &destino_long=${viaje.destino.longitud}
  				 &fecha=${viaje.fecha}
			 	 &hora=${viaje.hora}
			 	 &premium=${viaje.premium}
  				 &token=${token}`;
  	return this.nuevoHttp.httpPostData("cliente/viajeNuevo", datos);
	}
	
  public modificarViaje(viaje: viajeMaps){
		let token = localStorage.getItem('token');
		let datos = `idCliente=${viaje.idCliente}&origen_lat=${viaje.origen.latitud}&origen_long=${viaje.origen.longitud}&destino_lat=${viaje.destino.latitud}&destino_long=${viaje.destino.longitud}&fecha=${viaje.fecha}&hora=${viaje.hora}&id=${viaje.id}&estado=${viaje.estado}&premium=${viaje.premium}&token=${token}`;
		return this.nuevoHttp.httpPostData('cliente/modificarviaje',datos)
	}

	public cancelarViaje(idViaje:number, motivo:string, mensaje:string){
		let token = localStorage.getItem('token');
		let datos = `idViaje=${idViaje}&motivo=${motivo}&mensaje=${mensaje}&token=${token}`;
		return this.nuevoHttp.httpPostData('viajes/cancelar', datos);
	}
}
