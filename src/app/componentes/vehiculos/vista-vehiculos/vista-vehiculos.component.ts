import { Component, OnInit } from '@angular/core';
import { vehiculo } from '../../../clases/vehiculo';
import {VehiculoService} from '../../../servicios/vehiculo/vehiculo.service';
@Component({
  selector: 'app-vista-vehiculos',
  templateUrl: './vista-vehiculos.component.html',
  styleUrls: ['./vista-vehiculos.component.css']
})
export class VistaVehiculosComponent implements OnInit {

  constructor(private serviciosVehiculos: VehiculoService) { }
  auto:vehiculo;
  autos:vehiculo[];
  nuevoForm:Boolean;
  cargando:Boolean;
  ngOnInit() {
    
    this.obtenerVehiculos();
  }

  public mostrar(autito: vehiculo){
    this.auto = autito;
    this.nuevoForm = false;
  }

  public mostrarNuevo(){
    this.auto = null;
    this.nuevoForm = true;
  }

  public agregado(nuevo:vehiculo){
    this.obtenerVehiculos();
  }

  public modificado(nuevo:vehiculo){
    this.obtenerVehiculos();
  }

  public obtenerVehiculos(){
    this.cargando = true;
    this.serviciosVehiculos.vehiculos()
    .subscribe(data =>{
      this.autos = data;
      setTimeout(() => {
        this.cargando = false;
      }, 1500);
    });
  }

}
