import { Injectable } from '@angular/core';
import { NuevohttpService } from '../nuevohttp.service';
import { catchError, map, tap } from 'rxjs/operators';
import {Observable } from 'rxjs';
import { remisero } from '../../clases/remisero';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor( public nuevohttp: NuevohttpService ) { }

  public noAsignados(){
    return this.nuevohttp.httpGet("encargado/noasignados");
  }

  public vehiculos(){
    return this.nuevohttp.httpGet("encargado/todos");
  }

}
