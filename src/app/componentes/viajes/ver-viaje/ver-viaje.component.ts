import { Component, OnInit, Input } from '@angular/core';
import { viajeMaps } from '../../../clases/viajeMaps';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { DataService } from '../../../servicios/data/data.service';
import { AuthService } from '../../../servicios/auth/auth.service';
import { Router } from '@angular/router';
import {  } from 'googlemaps';
@Component({
  selector: 'app-ver-viaje',
  templateUrl: './ver-viaje.component.html',
  styleUrls: ['./ver-viaje.component.css']
})
export class VerViajeComponent implements OnInit {
  verViaje:viajeMaps;
  direccionService: google.maps.DirectionsService;
  direccionRenderer: google.maps.DirectionsRenderer;
  mapa:any;
  tipo:string;


  @ViewChild('mapa')
  public mapaElementRef: ElementRef;
  cargoBien:Boolean;
  constructor(private ruteador: Router, private data: DataService, private auth: AuthService) { }
  ngOnInit() {
    this.tipo = this.auth.obtenerToken().data.tipo;
    this.data.currentMessage.subscribe(viaje =>{
      if(typeof(viaje) === 'string'){
        this.cargoBien = false;
      }
      else{
        this.cargoBien = true;
        this.verViaje = viaje;
        //this.direccionService = new google.maps.DirectionsService;
        //this.direccionRenderer = new google.maps.DirectionsRenderer();
        
        console.log(this.verViaje);
        
      }
    })
  }

  ngAfterViewInit(){
    //console.log(this.verViaje.origen.latitud + this.verViaje.origen.longitud);
    this.iniciarMapa();
  }

  public iniciarMapa(){
    this.mapa = new google.maps.Map(this.mapaElementRef.nativeElement,{
      zoom: 14,
      center:{ lat: this.verViaje.origen.latitud, lng : this.verViaje.origen.longitud }
    });
    this.direccionService = new google.maps.DirectionsService;
    
    this.direccionRenderer = new google.maps.DirectionsRenderer({
      draggable: true,
      map: this.mapa,
      
    })
    

    this.mostrarRuta();
  }

  public mostrarRuta(){
    let desde = `${this.verViaje.origen.latitud}, ${this.verViaje.origen.longitud}`;
    let hasta = `${this.verViaje.destino.latitud}, ${this.verViaje.destino.longitud}`;
    this.direccionService.route({
      origin:desde,
      destination:hasta,
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: true,
    },(response, status) => {
      if(status === google.maps.DirectionsStatus.OK){
        console.log(response.routes);
        for (let i in response.routes){
          //console.log(response.routes[i].);
          
        }
        this.direccionRenderer.setDirections(response);
        //console.log(response);
      }
    });
  }

  public modificar(){
    this.data.changeMessage(this.verViaje);
    this.ruteador.navigate(['/cliente/modificar']);
  }

  public cancelar(){
    this.data.changeMessage(this.verViaje);
    this.ruteador.navigate(['/cliente/cancelar']);
  }

  public rechazar(){
    this.data.changeMessage(this.verViaje);
    this.ruteador.navigate(['/remisero/rechazar']);
  }

}
