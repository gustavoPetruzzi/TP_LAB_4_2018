import { Injectable } from '@angular/core';
import { NuevohttpService } from '../nuevohttp.service';
@Injectable({
  providedIn: 'root'
})
export class CaptchaServiceService {

  constructor(private nuevoHttp: NuevohttpService) { }

  public obtenerCaptcha(){
    
  }
}
