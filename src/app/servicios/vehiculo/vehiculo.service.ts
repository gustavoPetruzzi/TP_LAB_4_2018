import { Injectable } from '@angular/core';
import { NuevohttpService } from '../nuevohttp.service';
import { catchError, map, tap } from 'rxjs/operators';
import {Observable } from 'rxjs';
import { remisero } from '../../clases/remisero';
import { vehiculo } from '../../clases/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor( public nuevohttp: NuevohttpService ) { }

  public noAsignados(){
    return this.nuevohttp.httpGet("encargado/noasignados");
  }

  public vehiculos():Observable<vehiculo[]>{
    return this.nuevohttp.httpGet("encargado/todos");
  }

  public agregar(auto:vehiculo){
    let token = localStorage.getItem('token');
    let datos = `marca=${auto.marca}&modelo=${auto.modelo}&anio=${auto.anio}&premium=${auto.premium}&token=${token}`;
    return this.nuevohttp.httpPostData("encargado/nuevovehiculo", datos)
  }
  public modificar(auto:vehiculo){
    let token = localStorage.getItem('token');
    let datos = `idVehiculo=${auto.id}&marca=${auto.marca}&modelo=${auto.modelo}&anio=${auto.anio}&premium=${auto.premium}&token=${token}`;
    return this.nuevohttp.httpPostData("encargado/modificarvehiculo",datos);
  }

}
