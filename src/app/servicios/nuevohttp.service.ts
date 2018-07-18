import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { cosa } from '../clases/token';
import { remisero } from '../clases/remisero';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NuevohttpService {
  api = "http://localhost/backendTp2/index.php/";
  //api = "https://remiseriagustavopetruzzi.000webhostapp.com/index.php/";
  cabecera = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded' );
  constructor( public nuevoHttp: HttpClient) {
  }
  
  public httpGet(url:string):Observable<any>{
    return this.nuevoHttp
    .get(this.api + url);
  }
  public httpPostData( url: string , data:any ){
    return this.nuevoHttp
    .post<any>( this.api + url, data, {headers: this.cabecera});
  }


}
