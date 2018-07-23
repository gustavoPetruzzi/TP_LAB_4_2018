import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ViajesService } from '../../../servicios/viajes/viajes.service';
import { RemiserosService } from '../../../servicios/remiseros/remiseros.service';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-remiseros-finalizar',
  templateUrl: './remiseros-finalizar.component.html',
  styleUrls: ['./remiseros-finalizar.component.css']
})
export class RemiserosFinalizarComponent implements OnInit {

  constructor(
    private ruteador: Router,
    private ruta: ActivatedRoute,
    private servicioViaje: ViajesService,
    private servicioRemisero: RemiserosService
  ) { }
  idViaje:number;
  monto:number;
  finalizaViajeForm:FormGroup;
  cargando:Boolean;
  msgs:any;
  esconderBoton:Boolean;
  ngOnInit() {
    this.cargando = true;
    this.esconderBoton = false;
    this.ruta.params.subscribe(params => {
      this.idViaje = +params['idViaje'];
      this.monto = + params['monto'];
      this.servicioViaje.buscarViaje(this.idViaje)
      .subscribe(data =>{
        console.log(data);
        this.cargando = false;
        this.finalizaViajeForm = new FormGroup({
          monto: new FormControl(this.monto,[
            Validators.required
          ])
        });

      })
    });    
  }

  public efectivo(){
    this.cargando = true;
    this.servicioRemisero.finalizarViajeEfectivo(this.idViaje, this.monto)
    .subscribe(data => {
      this.cargando = false;
      this.esconderBoton = true;
      this.mostrarMensaje('success', '¡Exito!', 'El viaje ha finalizado correctamente');
      setTimeout(() => {
        this.ruteador.navigate(['/remisero']);
      }, 2000);
    })
  }

  public cuentaCorriente(){
    this.cargando = true;
    this.servicioRemisero.finalizarViajeCuentaCorriente(this.idViaje, this.monto)
    .subscribe(data =>{
      this.cargando = false;
      this.esconderBoton = true;
      this.mostrarMensaje('success', '¡Exito!', 'El viaje ha finalizado correctamente');
      setTimeout(() => {
        this.ruteador.navigate(['/remisero']);
      }, 2000);
    })
  }

  public mostrarMensaje(severidad:string, resumen:string, detalle:string) {
    this.msgs = [];
    this.msgs.push({severity:severidad, summary:resumen, detail:detalle});
  }  

}
