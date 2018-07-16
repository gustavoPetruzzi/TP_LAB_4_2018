import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../servicios/data/data.service';
import { viajeMaps, opcionesRechazar } from '../../../clases/viajeMaps';
import { Router } from '@angular/router';
import { RemiserosService } from '../../../servicios/remiseros/remiseros.service';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {SelectItem} from 'primeng/api';


@Component({
  selector: 'app-remisero-rechazar',
  templateUrl: './remisero-rechazar.component.html',
  styleUrls: ['./remisero-rechazar.component.css']
})
export class RemiseroRechazarComponent implements OnInit {
  rechazarForm:FormGroup;
  constructor(private data:DataService, private ruteador:Router, private servicioRemisero: RemiserosService) { }
  rechazando:Boolean;
  rechazado:Boolean;
  viajeRechazado:viajeMaps;
  opciones = opcionesRechazar;
  motivos:SelectItem[];
  cargoBien:Boolean;
  ngOnInit() {
    this.data.currentMessage
    .subscribe(viaje =>{
      if(typeof(viaje) == 'string'){
        this.cargoBien = false;
      }
      else{
        this.cargoBien = true;
        this.rechazando = false;
        this.rechazado = false;
        this.viajeRechazado = viaje;
        this.motivos = new Array();
        this.motivos.push({label:'Seleccione un motivo', value: null});
        this.opciones.forEach(element =>{
          this.motivos.push({label: element, value: element})
        });

        this.rechazarForm = new FormGroup({
          motivo: new FormControl('',[
            Validators.required
          ]),
          mensaje: new FormControl('', [
            Validators.maxLength(159),
            Validators.minLength(20),
            Validators.required
          ])
        })
      }
    })
  }

  public rechazarViaje(){
    this.rechazando = true;
    this.servicioRemisero.rechazarViaje(this.viajeRechazado.id, this.rechazarForm.controls['motivo'].value, this.rechazarForm.controls['mensaje'].value)
    .subscribe(data =>{
      console.log(data);
      this.rechazando = false;
      this.rechazado = true;
    })
  }

}
