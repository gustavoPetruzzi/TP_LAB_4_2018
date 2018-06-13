import { Injectable } from '@angular/core';
import { NuevohttpService } from './nuevohttp.service';
import { cosa } from '../clases/token';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private nuevohttp: NuevohttpService) { }

  public loguear(usuario:string, password:string){
    let datos = `usuario=${usuario}&password=${password}`;
    return this.nuevohttp.httpPostData('ingreso/in', datos);
      
  }
}
