import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte3',
  templateUrl: './reporte3.component.html',
  styleUrls: ['./reporte3.component.scss']
})
export class Reporte3Component implements OnInit {
  doughnutChartData={
    labels:["activos","Reportados","Desactivados"],
    datasets:[
      {
        data: [125,10,5],
        BackgroundColor:[
          'rgba(255,0,25,0.5',
          'rgba(255,0,25,0.5',
          'rgba(255,0,25,0.5'
        ]
      }
    ]
  }
  doughnutChartOption={
    responsive:false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
