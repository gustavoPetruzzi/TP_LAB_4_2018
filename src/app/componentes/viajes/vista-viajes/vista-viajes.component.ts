import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../servicios/auth/auth.service';
import { ViajesService } from '../../../servicios/viajes/viajes.service';
import { Iviaje } from '../../../clases/Iviaje';
import { lugar } from '../../../clases/lugar';
import { viajeMaps } from '../../../clases/viajeMaps';
@Component({
  selector: 'app-vista-viajes',
  templateUrl: './vista-viajes.component.html',
  styleUrls: ['./vista-viajes.component.css']
})
export class VistaViajesComponent implements OnInit {

  constructor(private auth: AuthService, private servicioViajes: ViajesService) { }
  viajes:viajeMaps[];
  viaje: viajeMaps;
  ngOnInit() {
    this.viajes = new Array();
    if(this.auth.obtenerToken().data.tipo == 'encargado'){
      this.todosViajes();
    }
    else if( this.auth.obtenerToken().data.tipo == 'cliente'){
      this.viajesCliente();
    }
    else if( this.auth.obtenerToken().data.tipo == 'remisero'){
      this.viajesRemiseros();
    }
  }

  public todosViajes(){
    this.servicioViajes.obternerViajes()
    .subscribe(data =>{
      console.log(data);
      data.forEach(element => {
        let origen = new lugar(element.origen_lat, element.origen_long);
        let destino = new lugar(element.destino_lat, element.destino_long);
        this.viajes.push(
          new viajeMaps(
            element.id,
            element.fecha,
            element.hora,
            element.estado,
            element.idCliente,
            element.monto,
            origen,
            destino,
            element.premium));
      });
    });
  }

  public viajesCliente(){
    this.servicioViajes.obtenerViajesClientes(this.auth.obtenerToken().data.id)
    .subscribe(data => {
      console.log(data);
      data.forEach(element => {
        let origen = new lugar(element.origen_lat, element.origen_long);
        let destino = new lugar(element.destino_lat, element.destino_long);
        this.viajes.push(
          new viajeMaps(
            element.id,
            element.fecha,
            element.hora,
            element.estado,
            element.idCliente,
            element.monto,
            origen,
            destino,
            element.premium));
      });    
    })
  }
  public viajesRemiseros(){
    this.servicioViajes.obtenerViajesRemiseros(this.auth.obtenerToken().data.id)
    .subscribe(data =>{
      data.forEach(element => {
        let origen = new lugar(element.origen_lat, element.origen_long);
        let destino = new lugar(element.destino_lat, element.destino_long);
        this.viajes.push(
          new viajeMaps(
            element.id,
            element.fecha,
            element.hora,
            element.estado,
            element.idCliente,
            element.monto,
            origen,
            destino,
            element.premium
          )
        );
      })
    })
  }

  public ver(viajecito:viajeMaps){
    this.viaje = viajecito;
  }

}
