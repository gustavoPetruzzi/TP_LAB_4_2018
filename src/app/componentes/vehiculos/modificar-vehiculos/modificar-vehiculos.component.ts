import { Component, OnInit,Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { vehiculo, marcas } from '../../../clases/vehiculo';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {VehiculoService} from '../../../servicios/vehiculo/vehiculo.service';
@Component({
  selector: 'app-modificar-vehiculos',
  templateUrl: './modificar-vehiculos.component.html',
  styleUrls: ['./modificar-vehiculos.component.css']
})
export class ModificarVehiculosComponent implements OnInit {
  @Input() dato:vehiculo;
  @Output() enviarModificado: EventEmitter<vehiculo> = new EventEmitter<vehiculo>();
  marcasAutos = marcas;
  vehiculoForm:FormGroup;

  constructor(private servicioVehiculo: VehiculoService) { }
  aniosAutos = vehiculo.obtenerAnios();
  ngOnInit() {
    console.log(this.aniosAutos);
  }

  public consola(){
    console.log(this.dato);
  }

  ngOnChanges(){
    if(this.dato){
      this.vehiculoForm = new FormGroup({
        marca: new FormControl(this.dato.marca,[
          Validators.required
        ]),
        modelo: new FormControl(this.dato.modelo,[
          Validators.required
        ]),
        anio: new FormControl(this.dato.anio, [
          Validators.required,
        ]),
        tipo: new FormControl(this.dato.premium, [
          Validators.required
        ])
      });
    }
  }

  public modificar(){
    this.dato.marca = this.vehiculoForm.controls['marca'].value;
    this.dato.modelo = this.vehiculoForm.controls['modelo'].value;
    this.dato.anio = this.vehiculoForm.controls['anio'].value;
    this.dato.premium = this.vehiculoForm.controls['tipo'].value;
    this.servicioVehiculo.modificar(this.dato)
    .subscribe(data =>{
      if(data){
        this.enviarModificado.emit(this.dato);
      }
    })
  }
}
