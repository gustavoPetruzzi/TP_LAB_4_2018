import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import {VehiculoService} from '../../../servicios/vehiculo/vehiculo.service';
import { vehiculo } from '../../../clases/vehiculo';
import { Observable } from "rxjs"
@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.css']
})
export class ListaVehiculosComponent implements OnInit {
  @Output() enviarVehiculo: EventEmitter<vehiculo> = new EventEmitter<vehiculo>();
  @Input() vehiculos:vehiculo[];
  constructor(private vehiculosService: VehiculoService) { }
  ngOnInit() {
    
  }


  public ver(enviado:vehiculo){
    this.enviarVehiculo.emit(enviado);
  }
}
