import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appOcupado]'
})
export class OcupadoDirective {
  @Input('appOcupado') ocupadoColor:any;
  constructor( private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.pintar(this.ocupadoColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.despintar();
  }

  private pintar(color:Boolean){
    if(color){
      this.el.nativeElement.style.backgroundColor = 'red';  
    }
    else{
      this.el.nativeElement.style.backgroundColor = 'green';
    }
  }

  private despintar(){
    this.el.nativeElement.style.backgroundColor = null;
  }

}
