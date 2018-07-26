import { Component, OnInit } from '@angular/core';
import { viajeMaps } from '../../../clases/viajeMaps';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ViajesService } from '../../../servicios/viajes/viajes.service';
import { EncuestaService } from '../../../servicios/encuesta/encuesta.service';
import { RemiserosService } from '../../../servicios/remiseros/remiseros.service';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { encuesta } from '../../../clases/encuesta';
import { remisero } from '../../../clases/remisero';
import { lugar } from '../../../clases/lugar';

@Component({
  selector: 'app-cliente-encuesta',
  templateUrl: './cliente-encuesta.component.html',
  styleUrls: ['./cliente-encuesta.component.css']
})
export class ClienteEncuestaComponent implements OnInit {

  constructor(
    private ruteador: Router,
    private ruta: ActivatedRoute,
    private servicioViaje: ViajesService,
    private servicioEncuesta: EncuestaService,
    private servicioRemisero:RemiserosService
  ) 
  {
    this.mejores = [
        {label:'Viaje', value:'viaje'},
        {label:'Conductor', value:'conductor'},
        {label:'Vehiculo', value:'vehiculo'},
        {label:'Camino', value:'camino'}
    ];
  }
  mejores: any[];
  cargoTres: Boolean;
  nombreFoto1:string;
  nombreFoto2:string;
  nombreFoto3:string;
  seleccionados: string[];
  cargando:Boolean;
  subido = false;
  idViajeEncuesta:  number;
  viajeEncuesta: viajeMaps;
  encuestaForm:FormGroup;
  subiendo:Boolean;
  remiseroEncuesta: remisero;
  msgs:any;
  encuestaCargada:encuesta;
  captchaValido:Boolean;
  ngOnInit() {
    this.captchaValido = false;
    this.cargando = true;
    this.ruta.params.subscribe(params =>{
      this.idViajeEncuesta = +params['idViaje'];
      this.servicioEncuesta.buscar(this.idViajeEncuesta).subscribe(data =>{
        console.log(data);
        if(data.idViaje != this.idViajeEncuesta){
          this.servicioViaje.buscarViaje(this.idViajeEncuesta)
          .subscribe(data =>{
            this.viajeEncuesta = new viajeMaps(
              data.id,
              data.fecha,
              data.hora,
              data.estado,
              data.idCliente,
              data.monto,
              new lugar(data.origen_lat, data.origen_long),
              new lugar(data.destino_lat, data.destino_long),
              data.premium
            )
            this.viajeEncuesta.idRemisero = data.idRemisero;
            this.obtenerRemisero(this.viajeEncuesta.idRemisero);
            this.servicioRemisero.buscarRemiseroVehiculo(this.viajeEncuesta.idRemisero)
            .subscribe(data =>{

              this.remiseroEncuesta = new remisero(data.nombre, data.apellido, data.usuario,data.vehiculo);
              this.remiseroEncuesta.id = data.id;
              console.log('remisero');
              console.log(data);
              setTimeout(() => {
                this.cargando =false;
              }, 1500);
            })
            setTimeout(() => {
              this.cargando =false;
            }, 1500);
          })
        }
        else{
          this.cargando = false;
          this.mostrarMensaje('error', '¡Error!', '¡La encuesta ya fue realizada!');
          setTimeout(() => {
            this.ruteador.navigate(['/cliente']);
          }, 1500);
        }
        
      })
    })
    this.encuestaForm = new FormGroup({
      puntajeRemisero: new FormControl('',[
        Validators.required
      ]),
      puntajeVehiculo: new FormControl('',[
        Validators.required,
      ]),
      recomendaria: new FormControl('',[
        Validators.required
      ]),
      seleccionados: new FormControl('',[
        Validators.required
      ]),
      puntajeReserva: new FormControl('',[
        Validators.required
      ]),
      puntajeCobranza: new FormControl('',[
        Validators.required
      ]),
      mensaje : new FormControl('',[
        Validators.required,
        Validators.minLength(50),
        Validators.maxLength(159)
      ])
    })
  }

  public subir(){
    if(this.cargoTres){

  
      this.subiendo = true;
      let arraySeleccionados = this.encuestaForm.controls['seleccionados'].value;
      arraySeleccionados = this.formatearEsto(arraySeleccionados);
      let encuestaNueva = new encuesta(
        this.viajeEncuesta.id,
        this.viajeEncuesta.idRemisero,
        this.remiseroEncuesta.vehiculo,
        this.encuestaForm.controls['puntajeRemisero'].value,
        this.encuestaForm.controls['puntajeVehiculo'].value,
        this.encuestaForm.controls['recomendaria'].value,
        arraySeleccionados[0],
        arraySeleccionados[1],
        arraySeleccionados[2],
        arraySeleccionados[3],
        this.encuestaForm.controls['puntajeReserva'].value,
        this.encuestaForm.controls['puntajeCobranza'].value,
        this.encuestaForm.controls['mensaje'].value,
        this.nombreFoto1,
        this.nombreFoto2,
        this.nombreFoto3,
      )
      this.servicioEncuesta.guardarEncuesta(encuestaNueva)
      .subscribe(data =>{
        setTimeout(() => {
          this.subiendo = false;
          this.subido = true;
          this.mostrarMensaje('success', '¡Exito!', "Se ha enviado su encuesta con exito");
        }, 1500);      
      })
    }
    else{
      this.mostrarMensaje('error', '¡Error!', 'Es necesario cargar 3 fotos');
    }
  
  }

  public obtenerRemisero(idRemisero:number){
    this.servicioRemisero.buscarRemiseroVehiculo(idRemisero)
    .subscribe(data =>{
      this.remiseroEncuesta = new remisero(data.nombre, data.apellido, data.usuario,data.vehiculo);
      this.remiseroEncuesta.id = data.id;
    })
  }

  public formatearEsto(seleccionados:string[]){
    let formateado= [];
    
    if(seleccionados.includes('viaje')){
      formateado.push(1);
    }
    else{
      formateado.push(0);
    }

    if(seleccionados.includes('conductor')){
      formateado.push(1);
    }
    else{
      formateado.push(0);
    }

    if(seleccionados.includes('vehiculo')){
      formateado.push(1);
    }
    else{
      formateado.push(0);
    }

    if(seleccionados.includes('camino')){
      formateado.push(1);
    }
    else{
      formateado.push(0);
    }
    return formateado;
  }

  public mostrarMensaje(severidad:string, resumen:string, detalle:string) {
    this.msgs = [];
    this.msgs.push({severity:severidad, summary:resumen, detail:detalle});
  }

  public subirFoto($event:any){
    console.log("xhr");
    console.log($event.xhr);
    console.log($event.xhr.response);
    if($event.xhr.response == 'true'){
      this.cargoTres = true;
    }
    else{
      this.cargoTres = false;
    }
  }

  public arreglar($event){
    let fecha = new Date();
    this.nombreFoto1 = this.viajeEncuesta.id + 'foto1-' + fecha.toDateString + '.jpeg';
    this.nombreFoto2 = this.viajeEncuesta.id + 'foto2-' + fecha.toDateString + '.jpeg'; 
    this.nombreFoto3 = this.viajeEncuesta.id + 'foto3-' + fecha.toDateString + '.jpeg';
    $event.formData.append('foto_1', this.nombreFoto1);
    $event.formData.append('foto_2', this.nombreFoto2);
    $event.formData.append('foto_3', this.nombreFoto3);
    $event.formData.append('idViaje', this.viajeEncuesta.id);
  }

  public showResponse($event){
    if($event.success == true){
      this.captchaValido = true;
    }
    console.log($event);
    console.log($event.success);
  }

}
