import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html',
  styleUrls: ['./reporte1.component.scss']
})
export class Reporte1Component implements OnInit {

  lineChartData={
    labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
    datasets:[
      {
        data:[0,89,34,45,54,28,74,93,80,90,70,75],
        label:'Membresias compradas'
      }
    ]
  }



  constructor() { }

  ngOnInit(): void {
  }

}
