import { Injectable } from '@angular/core';
import { NuevohttpService } from './nuevohttp.service';
import { catchError, map, tap } from 'rxjs/operators';
import {Observable } from 'rxjs';
import { remisero } from '../clases/remisero';

@Injectable({
  providedIn: 'root'
})
export class RemiseroService {

  constructor( public nuevohttp: NuevohttpService) {
    
  }

  public listaRemiseros():Observable<remisero[]>{
    return this.nuevohttp.httpGet("remiseros/lista");
  }

  public viajes(idRemisero: number){
    let token = localStorage.getItem('token');
    let datos = `id=${idRemisero}&token=${token}`;
    return this.nuevohttp.httpPostData("remisero/viajes", datos);
  }

  public asignarvehiculo(idVehiculo:number, idRemisero:number){
    let token = localStorage.getItem('token');
    let datos = `idVehiculo=${idVehiculo}&token=${token}&idRemisero=${idRemisero}`;
    return this.nuevohttp.httpPostData('encargado/asignarvehiculo', datos);
  }
  public removerVehiculo(idRemisero:number){
    let token = localStorage.getItem('token');
    let datos = `token=${token}&idRemisero=${idRemisero}`;
    return this.nuevohttp.httpPostData('encargado/removervehiculo', datos);
  }
}
