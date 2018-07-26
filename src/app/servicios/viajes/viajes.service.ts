import { Injectable } from '@angular/core';
import { NuevohttpService } from '../nuevohttp.service';
import { Observable } from 'rxjs';
import { Iviaje } from '../../clases/Iviaje';
import { Imonto } from '../../clases/iMonto';
@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  constructor(public nuevoHttp: NuevohttpService) { }

  public obternerViajes():Observable<Iviaje[]>{
    let token = localStorage.getItem('token');
    let datos =`token=${token}`;
    return this.nuevoHttp.httpPostData("viajes/lista", datos);
  }

  public obtenerViajesClientes(idCliente:number):Observable<Iviaje[]>{
    let token = localStorage.getItem('token');
    let datos = `token=${token}&idCliente=${idCliente}`;
    return this.nuevoHttp.httpPostData("viajes/cliente", datos);
  }

  public obtenerViajesRemiseros(idRemisero:number):Observable<Iviaje[]>{
    let token = localStorage.getItem('token');
    let datos = `token=${token}&idRemisero=${idRemisero}`;
    return this.nuevoHttp.httpPostData("viajes/remisero", datos);
  }

  public buscarViaje(idViaje:number):Observable<Iviaje>{
    let token = localStorage.getItem('token');
    let datos = `token=${token}&idViaje=${idViaje}`;
    return this.nuevoHttp.httpPostData('viajes/buscar', datos);
  }

  public obtenerViajeFecha(fecha:string):Observable<Iviaje[]>{
    let token = localStorage.getItem('token');
    let datos = `token=${token}&fecha=${fecha}`;
    return this.nuevoHttp.httpPostData('viajes/fecha', datos);
  }

  public montos():Observable<Imonto[]>{
    let token = localStorage.getItem('token');
    let datos = `token=${token}`;
    return this.nuevoHttp.httpPostData('estadisticas/ganancias', datos);
  }
}
