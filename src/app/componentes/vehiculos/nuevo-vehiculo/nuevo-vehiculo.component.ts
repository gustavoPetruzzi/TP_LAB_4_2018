import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { vehiculo, marcas } from '../../../clases/vehiculo';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {VehiculoService} from '../../../servicios/vehiculo/vehiculo.service';

@Component({
  selector: 'app-nuevo-vehiculo',
  templateUrl: './nuevo-vehiculo.component.html',
  styleUrls: ['./nuevo-vehiculo.component.css']
})
export class NuevoVehiculoComponent implements OnInit {
  @Input() nuevo:Boolean;
  @Output() enviarNuevo: EventEmitter<vehiculo> = new EventEmitter<vehiculo>();
  vehiculoNuevoForm:FormGroup;
  marcasAutos = marcas;
  aniosAutos = vehiculo.obtenerAnios();
  constructor(private servicioVehiculo: VehiculoService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.nuevo){
      this.vehiculoNuevoForm = new FormGroup({
        marca: new FormControl('',[
          Validators.required
        ]),
        modelo: new FormControl('',[
          Validators.required
        ]),
        anio: new FormControl('', [
          Validators.required,
        ]),
        tipo: new FormControl('', [
          Validators.required
        ])
      });
    }
  }
  public agregar(){
    let agregado = new vehiculo(
      this.vehiculoNuevoForm.controls['marca'].value,
      this.vehiculoNuevoForm.controls['modelo'].value,
      this.vehiculoNuevoForm.controls['anio'].value,
      this.vehiculoNuevoForm.controls['tipo'].value
    );
    this.servicioVehiculo.agregar(agregado)
    .subscribe(data =>{
      if(data){
        this.enviarNuevo.emit(agregado);
      }
    })
  }  

}
