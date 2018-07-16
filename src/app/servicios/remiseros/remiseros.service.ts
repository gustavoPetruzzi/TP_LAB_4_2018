import { Injectable } from '@angular/core';
import { NuevohttpService } from '../nuevohttp.service';
import { AuthService } from '../auth/auth.service';
import { usuario } from '../../clases/usuario';

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
}
