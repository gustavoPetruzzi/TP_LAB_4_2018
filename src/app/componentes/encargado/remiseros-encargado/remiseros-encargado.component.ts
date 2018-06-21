import { Component, OnInit } from '@angular/core';
import {RemiseroService} from '../../../servicios/remisero.service';
import {VehiculoService} from '../../../servicios/vehiculo/vehiculo.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { remisero } from '../../../clases/remisero';
import { vehiculo } from '../../../clases/vehiculo';
@Component({
  selector: 'app-remiseros-encargado',
  templateUrl: './remiseros-encargado.component.html',
  styleUrls: ['./remiseros-encargado.component.css']
})
export class RemiserosEncargadoComponent implements OnInit {

  constructor(private ruteador: Router, private remiseroService: RemiseroService, private vehiculoService: VehiculoService ) { }
  remiseros:remisero[];
  asignado:remisero;
  vehiculos:vehiculo[];
  vehiculoAsignado:vehiculo;

  ngOnInit() {
    this.obtenerRemiseros();
    this.obtenerVehiculos();
  }

  public obtenerRemiseros(){
    this.remiseroService.listaRemiseros()
    .subscribe(data =>{
      this.remiseros = data;
      console.log(this.remiseros);
    })
  }


  public ver(remisero:remisero){
    this.asignado = remisero;
    this.vehiculoAsignado = null;
    if(remisero.vehiculo){
      this.vehiculos.forEach(element => {
        if(remisero.vehiculo == element.id){
          this.vehiculoAsignado = element;
        }
      });
    }                                                                                                                                                            
  }

  public obtenerVehiculos(){
    this.vehiculoService.vehiculos()
    .subscribe(data =>{
      this.vehiculos = data;
    })
  }

}
