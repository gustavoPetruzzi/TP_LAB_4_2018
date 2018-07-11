import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private ruteador: Router) { }

  ngOnInit() {
  }

  public ir(lugar:string){
    switch (lugar) {
      case 'remiseros':
        this.ruteador.navigate(['/encargado/remiseros']);
        break;
      case 'vehiculos':
        this.ruteador.navigate(['/encargado/vehiculos']);
        break;
      case 'viajes':
        this.ruteador.navigate(['/viajes']);
        break;
      case 'terminados':
        this.ruteador.navigate(['/encargado/terminados']);
        break;              
      default:
        
        break;
    }
  }

  public ver(id:any){
    console.log(id);                                                                                                                                                      
  }
}
