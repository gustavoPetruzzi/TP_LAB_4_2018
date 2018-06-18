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
    let token = localStorage.getItem('token');
    let datos = `id=${idRemisero}&token=${token}`;
    return this.nuevohttp.httpPostData("remisero/viajes", datos);
  }
}
