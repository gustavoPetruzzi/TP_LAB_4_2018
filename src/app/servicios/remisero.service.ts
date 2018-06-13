import { Injectable } from '@angular/core';
import { NuevohttpService } from './nuevohttp.service';
import { catchError, map, tap } from 'rxjs/operators';
import { viaje } from '../clases/viajes';
@Injectable({
  providedIn: 'root'
})
export class RemiseroService {

  constructor( public nuevohttp: NuevohttpService) {
    
  }

  public listar(){
    return this.nuevohttp.httpGet("ingreso/token");
  }

  public viajes(idRemisero: number){
    let datos = `id=${idRemisero}`;
    return this.nuevohttp.httpPostData("remisero/viajes", datos);
  }
}
