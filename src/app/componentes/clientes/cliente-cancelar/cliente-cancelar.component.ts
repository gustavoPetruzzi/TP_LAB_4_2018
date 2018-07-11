import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../servicios/data/data.service';
import { viajeMaps, opcionesCancelar } from '../../../clases/viajeMaps';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {SelectItem} from 'primeng/api';
@Component({
  selector: 'app-cliente-cancelar',
  templateUrl: './cliente-cancelar.component.html',
  styleUrls: ['./cliente-cancelar.component.css']
})
export class ClienteCancelarComponent implements OnInit {
  cancelarForm:FormGroup;
  constructor(private data: DataService) { }
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

}
