import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { viajeMaps } from '../../../clases/viajeMaps';
import { DataService } from '../../../servicios/data/data.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../servicios/auth/auth.service';
@Component({
  selector: 'app-detalle-viajes',
  templateUrl: './detalle-viajes.component.html',
  styleUrls: ['./detalle-viajes.component.css']
})
export class DetalleViajesComponent implements OnInit {
  @Input() detalle:viajeMaps[];
  @Output() enviarViaje: EventEmitter<viajeMaps> = new EventEmitter<viajeMaps>();
  cols:any[];
  constructor(private data: DataService, private ruteador: Router, private auth: AuthService) { }

  ngOnInit() {
    if(this.auth.obtenerToken().data.tipo == 'cliente'){
      this.cols = [
          
          { field: 'fecha', header: 'Fecha' },
          { field: 'hora', header: 'Hora' },
          { field: 'estado', header: 'Estado' },
          { field: 'monto', header: 'Monto' },
      ];      
    }
    else{
    this.cols = [
        { field: 'idCliente', header: 'Cliente' },
        { field: 'fecha', header: 'Fecha' },
        { field: 'hora', header: 'Hora' },
        { field: 'estado', header: 'Estado' },
        { field: 'monto', header: 'Monto' },
    ];      
    }  
  }
  public mostrar(algo:viajeMaps){
    this.data.changeMessage(algo);
    this.ruteador.navigate(['/viajes/info']);
  }
}
