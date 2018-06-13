import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router }  from '@angular/router';
import { AuthService } from './auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class VerificarJWTService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean>{
    if(this.auth.estaLogueado()){
      return true;
    }
    else{
      this.router.navigate(['/error']);
      return !true;
    }
  }
}
