import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { cosa } from '../clases/token';

@Injectable({
  providedIn: 'root'
})
export class NuevohttpService {
  api = "http://localhost/backendTp2/index.php/";
  //api = "http://remiseriagustavopetruzzi.000webhostapp.com/index.php/";
  cabecera = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded' );
  constructor( public nuevoHttp: HttpClient) {
  }

  public httpGet(url:string){
    return this.nuevoHttp
    .get(this.api + url);
  }
  public httpPostData( url: string , data:any ){
    return this.nuevoHttp
    .post<any>( this.api + url, data, {headers: this.cabecera});
  }


}
