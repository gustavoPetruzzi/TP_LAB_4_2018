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
import {RadioButtonModule} from 'primeng/radiobutton';
import { AgmCoreModule } from '@agm/core';
import { ClienteInfoNuevoComponent } from './componentes/clientes/cliente-info-nuevo/cliente-info-nuevo.component';
import { PrincipalComponent } from './componentes/encargado/principal/principal.component';
import { RemiserosEncargadoComponent } from './componentes/encargado/remiseros-encargado/remiseros-encargado.component';
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
    RemiserosEncargadoComponent
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
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
