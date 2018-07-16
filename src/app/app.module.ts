import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RemiseroComponent } from './componentes/remiseros/remisero/remisero.component';
import {RemiseroService} from './servicios/remisero.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RuteandoModule } from './ruteando/ruteando.module';
import { ErrorComponent } from './error/error.component';
import { ClienteComponent } from './cliente/cliente.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { RemiseroAsignadosComponent } from './componentes/remiseros/remisero-asignados/remisero-asignados.component';
import { BarralateralComponent } from './componentes/barralateral/barralateral.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ClienteNuevoComponent } from './componentes/clientes/cliente-nuevo/cliente-nuevo.component';
//reCaptcha
import { NgxCaptchaModule } from 'ngx-captcha';
// calendario
import {CalendarModule} from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ClienteInfoNuevoComponent } from './componentes/clientes/cliente-info-nuevo/cliente-info-nuevo.component';
import { PrincipalComponent } from './componentes/encargado/principal/principal.component';
import { RemiserosEncargadoComponent } from './componentes/encargado/remiseros-encargado/remiseros-encargado.component';
import { PremiumPipe } from './pipes/premium.pipe';
import { VistaVehiculosComponent } from './componentes/vehiculos/vista-vehiculos/vista-vehiculos.component';
import { ListaVehiculosComponent } from './componentes/vehiculos/lista-vehiculos/lista-vehiculos.component';
import { ModificarVehiculosComponent } from './componentes/vehiculos/modificar-vehiculos/modificar-vehiculos.component';
import { NuevoVehiculoComponent } from './componentes/vehiculos/nuevo-vehiculo/nuevo-vehiculo.component';
import { AgmCoreModule } from '@agm/core';
import { DetalleViajesComponent } from './componentes/viajes/detalle-viajes/detalle-viajes.component';
import { VistaViajesComponent } from './componentes/viajes/vista-viajes/vista-viajes.component';
import { ViajePipe } from './pipes/viaje.pipe';
import { VerViajeComponent } from './componentes/viajes/ver-viaje/ver-viaje.component';
import {GMapModule} from 'primeng/gmap';
import { RemiserosNuevoComponent } from './componentes/encargado/remiseros-nuevo/remiseros-nuevo.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TooltipModule} from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';
import { ClienteModificarComponent } from './componentes/clientes/cliente-modificar/cliente-modificar.component';
import { ClienteCancelarComponent } from './componentes/clientes/cliente-cancelar/cliente-cancelar.component';
import { RemiseroRechazarComponent } from './componentes/remiseros/remisero-rechazar/remisero-rechazar.component';
import {CaptchaModule} from 'primeng/captcha';
export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    RemiseroComponent,
    LoginComponent,
    ErrorComponent,
    ClienteComponent,
    RemiseroAsignadosComponent,
    BarralateralComponent,
    ClienteNuevoComponent,
    ClienteInfoNuevoComponent,
    PrincipalComponent,
    RemiserosEncargadoComponent,
    PremiumPipe,
    VistaVehiculosComponent,
    ListaVehiculosComponent,
    ModificarVehiculosComponent,
    NuevoVehiculoComponent,
    DetalleViajesComponent,
    VistaViajesComponent,
    ViajePipe,
    VerViajeComponent,
    RemiserosNuevoComponent,
    ClienteModificarComponent,
    ClienteCancelarComponent,
    RemiseroRechazarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost                                                                                                                                               '],
        blacklistedRoutes: ['localhost:3001/auth/']
      }
    }),
    NgxCaptchaModule.forRoot({
      reCaptcha2SiteKey: '6Lf4rF4UAAAAAPiiMTDNqSA-8mQUd9XK1T_pdKdG', // optional, can be overridden with 'siteKey' component property
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCeoEzhaOnnzaVZpPGrcHb48vwKcyrJ9p4',
      libraries: ["places", "geometry", "drawing"]
    }),
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RuteandoModule,
    LeafletModule.forRoot(),
    BrowserAnimationsModule,
    CalendarModule,
    RadioButtonModule,
    TableModule,
    MessageModule,
    MessagesModule,
    DropdownModule,
    InputTextareaModule,
    TooltipModule,
    ButtonModule,
    CaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
