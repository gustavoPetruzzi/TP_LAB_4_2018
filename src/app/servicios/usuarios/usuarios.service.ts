import { Injectable } from '@angular/core';
import { NuevohttpService } from '../nuevohttp.service';
import { usuario } from '../../clases/usuario';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(public nuevoHttp: NuevohttpService) { }

  public obtenerUsuarios():Observable<usuario[]>{
    return this.nuevoHttp.httpGet('ingreso/usuarios');
  }
}
