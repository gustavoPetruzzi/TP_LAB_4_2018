import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../servicios/data/data.service';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { tokenDecodificado } from '../../../clases/tokenDecodificado';
import { viajeMaps } from '../../../clases/viajeMaps';
import { AuthService } from '../../../servicios/auth/auth.service';
import { ClienteService } from '../../../servicios/cliente/cliente.service';


import { MapsAPILoader } from '@agm/core';
import {  } from 'googlemaps';
@Component({
  selector: 'app-cliente-info-nuevo',
  templateUrl: './cliente-info-nuevo.component.html',
  styleUrls: ['./cliente-info-nuevo.component.css']
})
export class ClienteInfoNuevoComponent implements OnInit {

  constructor(private data: DataService, private auth: AuthService, private clienteService: ClienteService ) { }
  viaje: viajeMaps;
  token: tokenDecodificado;
  direccionService: google.maps.DirectionsService;
  direccionRenderer: google.maps.DirectionsRenderer;

  mapa:any;

  @ViewChild('mapa') 
  public mapaElementRef: ElementRef;
  public cargoBien:Boolean;
  public reservoViaje:boolean;
  public errorReserva = false;
  ngOnInit() {
    this.reservoViaje = false;
    this.errorReserva = false;
    this.data.currentMessage.subscribe(viaje =>{
      if(typeof(viaje) === 'string'){
        this.cargoBien = false;
      }
      else{
        this.cargoBien = true;
        let tipo:Boolean = false;
        if(viaje.tipo == 'premium'){
          tipo = true;
        }
        this.viaje = new viajeMaps(viaje.fecha, viaje.hora, "solicitado", 0, 0, viaje.origen, viaje.destino, tipo);
        this.token = this.auth.obtenerToken();
        this.viaje.idCliente = this.token.data.id;
        console.log(this.viaje);
        console.log(this.viaje.origen.longitud);
        this.direccionService = new google.maps.DirectionsService;
        this.direccionRenderer = new google.maps.DirectionsRenderer();
        this.iniciarMapa();
      }
    });
  }
  

  public iniciarMapa() {
    this.mapa = new google.maps.Map(this.mapaElementRef.nativeElement,{
      zoom: 14,
      center:{ lat: this.viaje.origen.latitud, lng: this.viaje.origen.longitud}
    });
    this.direccionService = new google.maps.DirectionsService;
    this.direccionRenderer = new google.maps.DirectionsRenderer({
      draggable: true,
      map: this.mapa,
    });
    
     this.mostrarRuta()

    
  }
  
  public mostrarRuta(){
    let desde = `${this.viaje.origen.latitud}, ${this.viaje.origen.longitud}`;
    let hasta = `${this.viaje.destino.latitud}, ${this.viaje.destino.longitud}`;
    this.direccionService.route({
      origin: desde,
      destination: hasta,
      travelMode: google.maps.TravelMode.DRIVING
    },(response, status) => {
      if(status === google.maps.DirectionsStatus.OK){
        this.direccionRenderer.setDirections(response); 
      }
    });
  }

  public reservar(){
    this.clienteService.nuevoViaje(this.viaje)
    .subscribe(
      data =>{
        this.reservoViaje = true;
      },
      error =>{
        this.errorReserva = true;
      })
    
  }

}
