import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RemiseroComponent } from '../componentes/remiseros/remisero/remisero.component';
import { RemiseroAsignadosComponent } from '../componentes/remiseros/remisero-asignados/remisero-asignados.component';
import { ClienteNuevoComponent } from '../componentes/clientes/cliente-nuevo/cliente-nuevo.component';
import { ClienteModificarComponent } from '../componentes/clientes/cliente-modificar/cliente-modificar.component';
import { ClienteInfoNuevoComponent } from '../componentes/clientes/cliente-info-nuevo/cliente-info-nuevo.component';
import { ClienteCancelarComponent } from '../componentes/clientes/cliente-cancelar/cliente-cancelar.component';
import { ClienteComponent } from '../cliente/cliente.component';
import { LoginComponent } from '../login/login.component';
import { ErrorComponent } from '../error/error.component';
import { VerificarJWTService } from '../servicios/verificar-jwt.service';
import { VerificarTipoService } from '../servicios/verificarTipo/verificar-tipo.service';
import { VerificarTipoClienteService } from '../servicios/verificarTipo/verificar-tipo-cliente.service';
import { VerificarEncargadoService } from '../servicios/verificarTipo/verificar-encargado.service';
import { PrincipalComponent } from '../componentes/encargado/principal/principal.component';
import { RemiserosEncargadoComponent } from '../componentes/encargado/remiseros-encargado/remiseros-encargado.component';
import { RemiserosNuevoComponent } from '../componentes/encargado/remiseros-nuevo/remiseros-nuevo.component';
import { VistaVehiculosComponent } from '../componentes/vehiculos/vista-vehiculos/vista-vehiculos.component';
import { VistaViajesComponent } from '../componentes/viajes/vista-viajes/vista-viajes.component';
import { VerViajeComponent } from '../componentes/viajes/ver-viaje/ver-viaje.component';


const miRuteo = [
  { path: 'login', component: LoginComponent },
  { path: 'remisero',  canActivate:[VerificarJWTService,VerificarTipoService ],
    children: [
      {path: '', component: RemiseroComponent },
      {path: 'asignados', component: RemiseroAsignadosComponent }
    ] },
  { path: 'cliente',  canActivate:[VerificarJWTService, VerificarTipoClienteService],
    children: [
      {path: '', component: ClienteComponent},
      {path: 'nuevo', component: ClienteNuevoComponent },
      {path: 'modificar', component: ClienteModificarComponent },
      {path: 'infoNuevo', component: ClienteInfoNuevoComponent },
      {path: 'cancelar', component: ClienteCancelarComponent }
    ] },
  { path: 'encargado',  canActivate:[VerificarJWTService, VerificarEncargadoService],
    children: [
      {path: '', component: PrincipalComponent},
      { path: 'remiseros', 
        children: [
          {path: '', component: RemiserosEncargadoComponent },
          {path: 'nuevo', component: RemiserosNuevoComponent },
        ]},

      {path: 'infoNuevo', component: ClienteInfoNuevoComponent },
      { path: 'vehiculos', component: VistaVehiculosComponent },  
    ] },
  { path: 'viajes', 
    children: [
      { path: '', component: VistaViajesComponent },
      { path: 'info', component: VerViajeComponent }
    ] },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: LoginComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(miRuteo)
  ],
  exports: [
    RouterModule
  ],
})
export class RuteandoModule { }
