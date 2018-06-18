import { Component, OnInit } from '@angular/core';
import { tokenDecodificado } from '../../clases/tokenDecodificado';
import { AuthService } from '../../servicios/auth/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const RutasRemisero: RouteInfo[] = [
    { path: '/remisero', title: 'Menu principal',  icon: 'pe-7s-graph', class: '' },
    { path: '/login', title: 'Viajes en curso',  icon: 'pe-7s-graph', class: '' },
    { path: '/remisero/asignados', title: 'Viajes asignados',  icon:'pe-7s-user', class: '' },
    { path: '/cliente', title: 'Viajes Terminados',  icon:'pe-7s-science', class: '' },
];
export const RutasCliente: RouteInfo[] = [
    { path: '/cliente', title: 'Menu Principal',  icon: 'pe-7s-graph', class: '' },
    { path: '/cliente/nuevo', title: 'Nuevo Viaje',  icon: 'pe-7s-graph', class: '' },
    { path: '/remisero', title: 'Viajes Terminados',  icon:'pe-7s-user', class: '' },
    { path: '/error', title: 'error',  icon:'pe-7s-rocket', class: 'active-pro' },
];
export const RutasEncargado: RouteInfo[] = [
    { path: '/login', title: 'login',  icon: 'pe-7s-graph', class: '' },
    { path: '/remisero', title: 'Remisero',  icon:'pe-7s-user', class: '' },
    { path: '/cliente', title: 'cliente',  icon:'pe-7s-science', class: '' },
    { path: '/error', title: 'error',  icon:'pe-7s-rocket', class: 'active-pro' },
];
export const RutasPruebas: RouteInfo[] = [
];

@Component({
  selector: 'app-barralateral',
  templateUrl: './barralateral.component.html'
})
export class BarralateralComponent implements OnInit {
  menuItems: any[];
  logueado: boolean;
  constructor(private auth: AuthService, private ruteador: Router) { }

  ngOnInit() {
    this.controlarBarra();
  }

  public controlarBarra(){
    if(localStorage.getItem('token')){
        let token = this.auth.obtenerToken();
        switch (token.data.tipo) {
            case 'remisero':
                this.menuItems = RutasRemisero.filter(menuItem => menuItem);            
                break;
            case 'cliente':
                this.menuItems = RutasCliente.filter(menuItem => menuItem);            
                break;
            case 'encargado':
                this.menuItems = RutasEncargado.filter(menuItem => menuItem);
                break;
            default:
                break;
        }
    }
    else{
        this.menuItems = RutasPruebas.filter(menuItem => menuItem);
    }
    if(localStorage.getItem('logueado') == 'true'){
        this.logueado = true;
    }
    else{
        this.logueado = false;
    }
  }
  public salir(){
      localStorage.setItem('token', "");
      localStorage.setItem('logueado', 'false');
      this.ruteador.navigate(['/login']);
      this.logueado = false;
      this.controlarBarra();
  }
}
