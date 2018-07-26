import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ViajesService } from '../../../../servicios/viajes/viajes.service';
import * as jsPdf from 'jspdf';
import * as html2canvas from 'html2canvas';
@Component({
  selector: 'app-ganancias',
  templateUrl: './ganancias.component.html',
  styleUrls: ['./ganancias.component.css']
})
export class GananciasComponent implements OnInit {

  constructor(private servicioViaje: ViajesService) { }
  data:any;
  efectivoTotal:number = 0;
  cuentaCorriente:number = 0;
  cargando:Boolean;
  @ViewChild('alPdf') alPdf:ElementRef;
  ngOnInit() {
    this.cargando = true;
    this.servicioViaje.montos()
    .subscribe(data =>{
      data.forEach(element => {
        if(element.efectivo){
          this.efectivoTotal += element.monto;
        }
        else if(!element.efectivo){
          this.cuentaCorriente += element.monto;
        }
      });
      

      this.data = {
        labels: ['Efectivo', 'Deuda en Cta Cte'],
        datasets: [
          {
            data: [this.efectivoTotal, this.cuentaCorriente],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]            
          }
        ]
      }
      this.cargando = false;

    })
  }

  public generarPdf(){
    
    html2canvas(this.alPdf.nativeElement)
    .then(canvas =>{
      let doc = new jsPdf('l');
      let img = canvas.toDataURL('image/png');
      doc.addImage(img,'JPEG', 5, 20);
      doc.save('algo2.pdf');
    })


    /*
    html2canvas(this.alPdf.nativeElement, {
        onrendered: (canvas) =>{
        let doc = new jsPdf();
              doc.addImage(canvas.toDataUrl());
              doc.save('algo2.pdf');
            })        
        }
    })
      */
  }

}
