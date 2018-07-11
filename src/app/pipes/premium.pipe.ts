import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'premium'
})
export class PremiumPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    if(value == 0){
      return "Comun";
    }
    return "Premium";
  }

}
