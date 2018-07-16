import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../servicios/data/data.service';
import { viajeMaps, opcionesCancelar } from '../../../clases/viajeMaps';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../../../servicios/cliente/cliente.service';
import {SelectItem} from 'primeng/api';
@Component({
  selector: 'app-cliente-cancelar',
  templateUrl: './cliente-cancelar.component.html',
  styleUrls: ['./cliente-cancelar.component.css']
})
export class ClienteCancelarComponent implements OnInit {
  cancelarForm:FormGroup;
  cancelando:Boolean;
  cancelado:Boolean;
  constructor(private data: DataService, private ruteador: Router, private servicioCliente: ClienteService) { }
  viajeCancelado:viajeMaps;
  opciones = opcionesCancelar;
  motivos:SelectItem[];
  cargoBien:Boolean;
  ngOnInit() {
    this.data.currentMessage
    .subscribe(viaje =>{
      if(typeof(viaje) === 'string'){
        this.cargoBien = false;
      }
      else{
        this.cargoBien = true;
        this.cancelando =false;
        this.cancelado = false;
        this.viajeCancelado = viaje;
        this.motivos = new Array();
        this.motivos.push({label: 'Seleccione un motivo', value: null});
        this.opciones.forEach(element => {
          this.motivos.push({label: element, value: element});
        });

        this.cancelarForm = new FormGroup({
          motivo: new FormControl('', [
            Validators.required
          ]),
          mensaje: new FormControl('',[
            Validators.maxLength(159),
            Validators.minLength(20),
            Validators.required
          ])
        })
        

      }
    })
  }

  public cancelarViaje(){
    this.cancelando = true;
    this.servicioCliente.cancelarViaje(this.viajeCancelado.id, this.cancelarForm.controls['motivo'].value, this.cancelarForm.controls['mensaje'].value)
    .subscribe(data =>{
      console.log(data);
      this.cancelando = false;
      this.cancelado = true;
    })
  }

  public volver(){
    this.ruteador.navigate(['/cliente']);
  }
}
