import { Injectable } from '@angular/core';
import { NuevohttpService } from '../nuevohttp.service';
import { viajeMaps } from '../../clases/viajeMaps';
import { AuthService } from '../auth/auth.service';
import {  } from '../../clases/';
import { UsuarioCompleto } from '../../clases/usuarioCompleto';
import { Observable } from 'rxjs';

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
  public registrar(nombre:string, apellido:string, usuario:string, password: string){
		let tipo = 'cliente';
		
		let datos = `nombre=${nombre}&apellido=${apellido}&usuario=${usuario}&password=${password}&tipo=${tipo}`;
		console.log(datos);
    return this.nuevoHttp.httpPostData('ingreso/registro',datos);
	}
	public buscarCliente(id:number):Observable<UsuarioCompleto>{
		let token= localStorage.getItem('token');
		let datos= `id=${id}&token=${token}`;
		return this.nuevoHttp.httpPostData('cliente/buscar', datos);
	}

	public modificarCliente(usuario:UsuarioCompleto){
		let token = localStorage.getItem('token');
		let datos = `id=${usuario.id}&nombre=${usuario.nombre}&apellido=${usuario.apellido}&usuario=${usuario.usuario}&password=${usuario.password}&token=${token}`;
		return this.nuevoHttp.httpPostData('cliente/modificar', datos);
	}

	
}
