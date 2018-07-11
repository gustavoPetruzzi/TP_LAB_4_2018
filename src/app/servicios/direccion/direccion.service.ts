import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DireccionService {
  api="http://maps.googleapis.com/maps/api/geocode/json?latlng=";
  
  constructor(public clienteHttp: HttpClient) { }

  public obtenerDireccion(lat:number, long:number){
    let datos =`${lat},${long}&sensor=true`
    return this.clienteHttp.get(this.api+datos);
  }
}
