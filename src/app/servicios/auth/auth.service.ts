import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tokenDecodificado } from '../../clases/tokenDecodificado';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _token: string;
  constructor(private jwtHelper: JwtHelperService) {
  }

  public estaLogueado(){
    try {
      this._token = localStorage.getItem('token');
      let rta = this.jwtHelper.isTokenExpired(this._token);
      console.log(this.jwtHelper.isTokenExpired(this._token));
      return !rta;
    }
    catch(error){
      console.log(this.jwtHelper.isTokenExpired(this._token));
      return false;
    }
  }

  public obtenerToken():tokenDecodificado{
    try{
      this._token = localStorage.getItem('token');
      return this.jwtHelper.decodeToken(this._token);
    }
    catch(error){
      return undefined;
    }
  }

  public obtenerExpirationDate(){
    try{
      this._token = localStorage.getItem('token');
      return this.jwtHelper.getTokenExpirationDate(this._token);
    }
    catch(error){
      return null;
    }
  }

}
