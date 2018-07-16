import { Component, OnInit } from '@angular/core';
import {RemiseroService} from '../../../servicios/remisero.service';
import { AuthService } from '../../../servicios/auth/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { tokenDecodificado } from '../../../clases/tokenDecodificado';
import { viaje } from '../../../clases/viajes';
@Component({
  selector: 'app-remisero',
  templateUrl: './remisero.component.html',
  styleUrls: ['./remisero.component.css']
})
export class RemiseroComponent implements OnInit {

  id: number;
  usuario: string;
  tipo: string;
  token:tokenDecodificado;
  // CAMBIAR VIAJEREMISERO
  viajesRemisero:viaje[];
  viajeEncurso:viaje;
  
  constructor( private ruteador: Router, private auth: AuthService, private remiseroService: RemiseroService) { }
  algo:any;
  ngOnInit() {
    this.datosRemisero();
  }
  public datosRemisero(){
    this.token = this.auth.obtenerToken();
    this.id = this.token.data.id;
    this.usuario = this.token.data.usuario;
    this.tipo = this.token.data.tipo;
    this.remiseroService.viajes(this.id)
    .subscribe(data => {
      this.viajesRemisero = data;
      this.viajesRemisero.forEach(element => {
        if(element.estado == 'transcurso'){
          this.viajeEncurso = element;
        }
      });
    })
  }

  public ir(lugar:string){
    switch (lugar) {
      case 'viajes':
        this.ruteador.navigate(['/viajes']);
        break;
      case 'terminados':
        this.ruteador.navigate(['/remisero/terminados']);
        break;
      default:
        
        break;
    }
  }


}
