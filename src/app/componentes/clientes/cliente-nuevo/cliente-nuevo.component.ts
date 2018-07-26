import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CaptchaServiceService } from '../../../servicios/captcha/captcha-service.service';
import { DataService } from '../../../servicios/data/data.service';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import { lugar } from '../../../clases/lugar';
import { viajeMaps } from '../../../clases/viajeMaps';

@Component({
  selector: 'app-cliente-nuevo',
  templateUrl: './cliente-nuevo.component.html',
  styleUrls: ['./cliente-nuevo.component.css']
})
export class ClienteNuevoComponent implements OnInit {
  
  @ViewChild('mapita') 
  public mapitaElementRef: ElementRef;
  
  modificado:viajeMaps;
  titulo:string;
  latitude: number;
  longitude: number;
  zoom: number;
  origenControl:FormControl;
  destinoControl:FormControl;
  fechaActual:Date;
  @ViewChild('origen') 
  public origenElementRef: ElementRef;
  
  @ViewChild('destino') 
  public destinoElementRef: ElementRef;
  origen: google.maps.LatLng;
  destino: google.maps.LatLng;
  msgs: any[];
  mensaje:any;
  
  constructor(
    private ruteador: Router,
    private data: DataService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
  ) {}
  viajeForm: FormGroup;
  captchaOk:boolean;
  ngOnInit() {
    //-58.381592
    this.fechaActual = new Date();
    this.captchaOk = false;
    this.modificado = null;
    this.latitude = -34.603722;
    this.longitude = -58.381592;
    this.zoom = 12;
    this.origenControl = new FormControl();
    this.destinoControl = new FormControl();
    this.titulo = '¡Reserva tu proximo viaje!';
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
      modificar: false,
      estado: 'solicitado',
      id: -1
    }
    this.data.changeMessage(mensaje);
    this.ruteador.navigate(['/cliente/infoNuevo']);
  }


  private posicionActual() {
    if("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition((position) =>{
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 18;
      })
    }
  }

  public showResponse($event){
    this.captchaOk = true;
  }  

  public mostrarMensaje(severidad:string, resumen:string, detalle:string) {
    this.msgs = [];
    this.msgs.push({severity:severidad, summary:resumen, detail:detalle});
  }


}
