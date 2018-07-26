import { Component, OnInit } from '@angular/core';
import { viajeMaps } from '../../../clases/viajeMaps';
import { lugar } from '../../../clases/lugar';
import { Iremisero } from '../../../clases/Iremisero';
import { remisero } from '../../../clases/remisero';
import { vehiculo } from '../../../clases/vehiculo';
import { ViajesService } from '../../../servicios/viajes/viajes.service';
import { RemiserosService } from '../../../servicios/remiseros/remiseros.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-asignar-viaje',
  templateUrl: './asignar-viaje.component.html',
  styleUrls: ['./asignar-viaje.component.css']
})
export class AsignarViajeComponent implements OnInit {

  constructor(
    private ruteador : Router,
    private ruta: ActivatedRoute,
    private servicioViaje: ViajesService,
    private servicioRemiseros: RemiserosService
  ) { }
  cargando: Boolean;
  asignado:Boolean;
  viajeAsignado: viajeMaps;
  idViajeAsignado:  number;
  viajesFecha: viajeMaps[] = [];
  remiseros:remisero[] = [];
  //remiserosLibres:remisero[] = [];
  remiserosOcupados:remisero[] = [];
  ngOnInit() {
    this.cargando =true;
    this.asignado = false;
    //this.buscarRemiseros();
    this.ruta.params.subscribe(params =>{
      this.idViajeAsignado = +params['idViaje'];
      this.servicioViaje.buscarViaje(this.idViajeAsignado)
      .subscribe(data =>{
        this.viajeAsignado = new viajeMaps(
          data.id,
          data.fecha,
          data.hora,
          data.estado,
          data.idCliente,
          data.monto,
          new lugar(data.origen_lat, data.origen_long),
          new lugar(data.destino_lat, data.destino_long),
          data.premium
        );
        this.servicioViaje.obtenerViajeFecha(this.viajeAsignado.fecha)
        .subscribe(data =>{
          data.forEach(element => {
            let viajeElement = new viajeMaps(
              element.id, 
              element.fecha, 
              element.hora, 
              element.estado, 
              element.idCliente, 
              element.monto,
              new lugar(element.origen_lat,element.origen_long), 
              new lugar(element.destino_lat, element.destino_long), 
              element.premium );
            viajeElement.idRemisero = element.idRemisero;
            this.viajesFecha.push(viajeElement);            
          });
            this.servicioRemiseros.listaRemiserosVehiculos()
            .subscribe(data =>{
              let auxiliarRemisero :remisero[] = [];
              data.forEach(element => {
                let remiseroElement = new remisero(element.nombre, element.apellido, element.usuario, new vehiculo(element.marca, element.modelo, element.anio, element.premium));
                remiseroElement.id = element.id;
                remiseroElement.vehiculo.id = element.idVehiculo;
                auxiliarRemisero.push(remiseroElement);
              });
              //FILTRO REMISEROS SEGUN EL AUTO NECESARIO
              this.remiseros = auxiliarRemisero.filter(remisero => parseInt(remisero.vehiculo.premium) === this.viajeAsignado.premium);

              for (let index = 0; index < this.remiseros.length; index++) {
                let remisero = this.remiseros[index];
                this.viajesFecha.forEach(element => {
                  if(element.idRemisero == remisero.id){
                    this.remiserosOcupados.push(remisero);
                  }
                });
                
              }
              this.cargando = false;
              

            })
          });
        })

      })
  }

  public  buscarRemiseros(){
    this.servicioRemiseros.listaRemiserosVehiculos()
    .subscribe(data =>{
      data.forEach(element => {
        let remiseroElement = new remisero(element.nombre, element.apellido, element.usuario, new vehiculo(element.marca, element.modelo, element.anio, element.premium));
        remiseroElement.id = element.id;
        remiseroElement.vehiculo.id = element.idVehiculo;
        this.remiseros.push(remiseroElement);
      });
    })
  }

  public estaOcupado(idRemisero:number){
    let ocupado = false;

    this.remiserosOcupados.forEach(element => {
      if(idRemisero == element.id){
        ocupado = true;
      }
    });
    return ocupado;
  }

  public asignar(idRemisero:number){
    this.servicioRemiseros.asignarViaje(this.viajeAsignado.id,idRemisero)
    .subscribe(data=>{
      this.asignado = true;
    })
  }
}
