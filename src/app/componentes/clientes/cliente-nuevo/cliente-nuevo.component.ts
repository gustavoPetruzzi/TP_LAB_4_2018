import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CaptchaServiceService } from '../../../servicios/captcha/captcha-service.service';
import { DataService } from '../../../servicios/data/data.service';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import {  } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { Router } from '@angular/router';
import { lugar } from '../../../clases/lugar';
import { viajeMaps } from '../../../clases/viajeMaps';
//import { } from '@types/yandex-maps';

@Component({
  selector: 'app-cliente-nuevo',
  templateUrl: './cliente-nuevo.component.html',
  styleUrls: ['./cliente-nuevo.component.css']
})
export class ClienteNuevoComponent implements OnInit {
  public origenControl: FormControl;
  public destinoControl: FormControl;
  
  @ViewChild('origen') 
  public origenElementRef: ElementRef;
  
  @ViewChild('destino') 
  public destinoElementRef: ElementRef;

  latitude: number;
  longitude: number;
  zoom: number;

  origen: google.maps.LatLng;
  destino: google.maps.LatLng;

  mensaje:any;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private ruteador: Router,
    private data: DataService
  ) {}
  viajeForm: FormGroup;
  captchaOk:boolean;
  ngOnInit() {
    /*
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 738143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    */
    /*
    ymaps.ready(() =>{
      this.iniciarMapa();
    })
    */
    
    
    this.origenControl = new FormControl();
    this.destinoControl = new FormControl();
    

    //this.posicionActual();
    this.mapsAPILoader.load().then(() => {
      let autocompleteOrigen = new google.maps.places.Autocomplete(this.origenElementRef.nativeElement, {
        types: ["address"]
      });


      let autocompleteDestino = new google.maps.places.Autocomplete(this.destinoElementRef.nativeElement, {
        types: ["address"]
      });



      autocompleteOrigen.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocompleteOrigen.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.origen= new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
          console.log(this.origen);
        });
      });


      autocompleteDestino.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocompleteDestino.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.destino= new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
          console.log(this.destino);
        });
      });
    });


    this.viajeForm = new FormGroup({
      hora: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      fecha: new FormControl('',[
        Validators.required,
      ]),
      tipo: new FormControl('',[
        Validators.required
      ]),
      
    })
  }

  //CAPTCHA
  public llenarFormulario(){
    let origen = new lugar();
    let destino = new lugar();


    origen.latitud = this.origen.lat();
    origen.longitud = this.origen.lng();

    destino.latitud = this.destino.lat();
    destino.longitud = this.destino.lng();

    let mensaje = {
      fecha: this.viajeForm.controls['fecha'].value,
      hora: this.viajeForm.controls['hora'].value,
      origen: origen,
      destino: destino,
      tipo: this.viajeForm.controls['tipo'].value,
    }
    this.data.changeMessage(mensaje);
    this.ruteador.navigate(['/cliente/infoNuevo']);
  }











  /* GEOLOCALIZACION;
  private posicionActual() {
    if("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition((position) =>{
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 18;
      })
    }
  }
  */



}
