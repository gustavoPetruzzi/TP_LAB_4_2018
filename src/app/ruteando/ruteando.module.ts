import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RemiseroComponent } from '../componentes/remiseros/remisero/remisero.component';
import { RemiseroAsignadosComponent } from '../componentes/remiseros/remisero-asignados/remisero-asignados.component';
import { ClienteNuevoComponent } from '../componentes/clientes/cliente-nuevo/cliente-nuevo.component';
import { ClienteInfoNuevoComponent } from '../componentes/clientes/cliente-info-nuevo/cliente-info-nuevo.component';
import { ClienteComponent } from '../cliente/cliente.component';
import { LoginComponent } from '../login/login.component';
import { ErrorComponent } from '../error/error.component';
import { VerificarJWTService } from '../servicios/verificar-jwt.service';
import { VerificarTipoService } from '../servicios/verificarTipo/verificar-tipo.service';
import { VerificarTipoClienteService } from '../servicios/verificarTipo/verificar-tipo-cliente.service';
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
      {path: 'infoNuevo', component: ClienteInfoNuevoComponent }
    ] },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: LoginComponent }
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
