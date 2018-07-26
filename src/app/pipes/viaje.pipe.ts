import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
@Pipe({
  name: 'viaje'
})
export class ViajePipe implements PipeTransform {

  transform(value: any, columna: string): any {
    switch (columna) {
      case "premium":
        if(value== 0){
          return "Comun";
        }
        return "Premium";
      case "monto":
        return "$ " + value;
      default:
        return value;
    }
  }

}
