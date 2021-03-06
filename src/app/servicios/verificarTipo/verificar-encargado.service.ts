import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router }  from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { tokenDecodificado } from '../../clases/tokenDecodificado';

@Injectable({
  providedIn: 'root'
})
export class VerificarEncargadoService implements CanActivate {
  token: tokenDecodificado
  constructor(private router: Router, private auth: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean>{
    this.token = this.auth.obtenerToken();
    if(this.token.data.tipo == 'encargado'){
      return true;
    }
    else{
      this.router.navigate(['/error']);
      return !true;
    }
  }
}