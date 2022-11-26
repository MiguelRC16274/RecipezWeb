import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte2',
  templateUrl: './reporte2.component.html',
  styleUrls: ['./reporte2.component.scss']
})
export class Reporte2Component implements OnInit {
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
