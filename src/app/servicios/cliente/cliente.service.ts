import { Injectable } from '@angular/core';
import { NuevohttpService } from '../nuevohttp.service';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(public nuevoHttp: NuevohttpService) { }

  public nuevoViaje(){
  	let token = localStorage.getItem('token');
  	//????
  	return this.nuevohttp.httpPostData("cliente/viajes", datos);
  }
}
