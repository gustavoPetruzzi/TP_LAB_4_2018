import { Component, OnInit } from '@angular/core';
import {RemiseroService} from '../../../servicios/remisero.service';
import {VehiculoService} from '../../../servicios/vehiculo/vehiculo.service';
import { DataService } from '../../../servicios/data/data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { remisero } from '../../../clases/remisero';
import { vehiculo } from '../../../clases/vehiculo';
@Component({
  selector: 'app-remiseros-encargado',
  templateUrl: './remiseros-encargado.component.html',
  styleUrls: ['./remiseros-encargado.component.css']
})
export class RemiserosEncargadoComponent implements OnInit {

  constructor(private ruteador: Router, private remiseroService: RemiseroService, private vehiculoService: VehiculoService, private dataServicio: DataService ) { }
  remiseros:remisero[];
  asignado:remisero;
  vehiculos:vehiculo[];
  vehiculoAsignado:vehiculo;
  noAsignados:vehiculo[];
  mostrarVehiculos:Boolean;

  ngOnInit() {
    this.obtenerRemiseros();
    this.obtenerVehiculos();
    this.obtenerVehiculosSinAsignar();
    this.mostrarVehiculos = false;
  }

  public obtenerRemiseros(){
    this.remiseroService.listaRemiseros()
    .subscribe(data =>{
      this.remiseros = data;
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

  public obtenerVehiculosSinAsignar(){
    this.vehiculoService.noAsignados()
    .subscribe(data =>{
      this.noAsignados = data;
    })
  }

  public mostrarListado(){
    this.mostrarVehiculos = true;
  }

  public asignar(auto:vehiculo){
    console.log(this.asignado.id);
    this.remiseroService.asignarvehiculo(auto.id, this.asignado.id)
    .subscribe(data =>{
      this.mostrarVehiculos = false;
      this.vehiculoAsignado = auto;
      this.obtenerVehiculos();
      this.obtenerVehiculosSinAsignar();
      this.obtenerRemiseros();
    })
  }

  public removerVehiculo(id: number){
    this.mostrarVehiculos = false;
    this.remiseroService.removerVehiculo(id)
    .subscribe(data=>{
      if(data){
        this.obtenerVehiculos();
        this.obtenerVehiculosSinAsignar();
        this.obtenerRemiseros();
        this.vehiculoAsignado = null;
      }
    });

  }

  public ir(){
    this.ruteador.navigate(['encargado/remiseros/nuevo']);
  }

  public modificar(data: remisero){
    this.dataServicio.changeMessage(data);
    this.ruteador.navigate(['encargado/remiseros/nuevo']);
  }

}
