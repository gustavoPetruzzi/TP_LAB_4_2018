import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FotosService {

  api = "http://localhost/backendTp2/index.php/";
  //api = "https://remiseriagustavopetruzzi.000webhostapp.com/index.php/";
  //cabecera = new HttpHeaders().set('Content-Type', 'multipart/form-data');
  cabecera = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded' );
  constructor( public nuevoHttp: HttpClient) {
  }
  
  public subirFotoUsuario(foto:any){
    let token = localStorage.getItem('token');
    let fd = new FormData();
    let url = 'ingreso/subirFoto';
    let datos = `foto1="${foto}`;
    /*
    let params = new HttpParams;
    fd.append('nombre', 'juan');
    fd.append('foto1', foto.value);
    const options = {
      params: params,
      reportProgress: true
    }
    let ruta = this.api + url;
    const req = new HttpRequest('POST', ruta, fd, options );

    return this.nuevoHttp.request(req);
    */
    return this.nuevoHttp.post(this.api + url,datos,foto);
  }
}
