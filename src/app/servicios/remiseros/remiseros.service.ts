import { Injectable } from '@angular/core';
import { NuevohttpService } from '../nuevohttp.service';
import { AuthService } from '../auth/auth.service';
import { UsuarioCompleto } from '../../clases/usuarioCompleto';
import { remisero } from '../../clases/remisero';
import { Iremisero } from '../../clases/Iremisero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemiserosService {

  constructor(private nuevoHttp: NuevohttpService, private auth:AuthService) { }

  public registrar(nombre:string, apellido:string, usuario:string){
    let token = this.auth.obtenerToken();
    let datos = `nombre=${nombre}&apellido=${apellido}&usuario=${usuario}&password=${usuario}&token=${token}`;
    return this.nuevoHttp.httpPostData('remiseros/alta',datos);
  }

  public modificarAdmin(id:number, nombre:string, apellido:string,usuario:string, password:string){
    let token = this.auth.obtenerToken();
    let datos = `nombre=${nombre}&apellido=${apellido}&usuario=${usuario}&password=${password}&token=${token}&id=${id}`;
    return this.nuevoHttp.httpPostData('remiseros/modificar', datos);
  }

  public rechazarViaje(idViaje:number, motivo:string, mensaje:string){
    let token = localStorage.getItem('token');
    let datos = `idViaje=${idViaje}&motivo=${motivo}&mensaje=${mensaje}&token=${token}`;
    return this.nuevoHttp.httpPostData('viajes/rechazar', datos);
  }

  public asignarViaje(idViaje:number, idRemisero:number){
    let token = localStorage.getItem('token');
    let datos = `idViaje=${idViaje}&idRemisero=${idRemisero}&token=${token}`;
    return this.nuevoHttp.httpPostData('viajes/asignar', datos);
  }

  public buscarRemisero(id:number):Observable<UsuarioCompleto>{
    let token= localStorage.getItem('token');
    let datos = `id=${id}&token=${token}`;
    return this.nuevoHttp.httpPostData('remisero/buscar', datos);
  }

  public buscarRemiseroVehiculo(id:number):Observable<remisero>{
    let token= localStorage.getItem('token');
    let datos = `id=${id}&token=${token}`;
    return this.nuevoHttp.httpPostData('remisero/buscar', datos);
  }  

  public comenzarViaje(idViaje){
    let token = localStorage.getItem('token');
    let datos = `idViaje=${idViaje}&token=${token}`;
    return this.nuevoHttp.httpPostData('remisero/comenzar', datos);
  }

  public finalizarViajeEfectivo(idViaje:number, monto:number){
    let token = localStorage.getItem('token');
    let datos = `idViaje=${idViaje}&monto=${monto}&token=${token}`;
    return this.nuevoHttp.httpPostData('remisero/finalizarefectivo', datos);
  }

  public finalizarViajeCuentaCorriente(idViaje:number, monto:number){
    let token = localStorage.getItem('token');
    let datos = `idViaje=${idViaje}&monto=${monto}&token=${token}`;
    return this.nuevoHttp.httpPostData('remisero/finalizarcuentacorriente', datos);
  }

  public listaRemiserosVehiculos():Observable<Iremisero[]>{
    return this.nuevoHttp.httpGet("remiseros/vehiculos");
  }

}
