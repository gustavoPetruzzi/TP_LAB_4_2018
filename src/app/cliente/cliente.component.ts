import { Component, OnInit } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AuthService } from '../servicios/auth/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { tokenDecodificado } from './../clases/tokenDecodificado';
import { viaje } from './../clases/viajes';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private ruteador: Router) { }

  ngOnInit() {
    
  }

  public ir(lugar:string){
    switch (lugar) {
      case 'viajes':
        this.ruteador.navigate(['/viajes']);
        break;
      case 'nuevo':
        this.ruteador.navigate(['/cliente/nuevo']);
        break;
      case 'configuracion':
        this.ruteador.navigate(['/cuenta']);
        break;
      default:
        
        break;
    }
  }

}
