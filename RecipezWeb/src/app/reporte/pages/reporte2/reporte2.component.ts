import { Component, OnInit } from '@angular/core';

interface Person {
  key: string;
  nameUser: string;
  email: string;
  quantityReport: string;
}

@Component({
  selector: 'app-reporte2',
  templateUrl: './reporte2.component.html',
  styleUrls: ['./reporte2.component.scss']
})

export class Reporte2Component implements OnInit {

  listOfData: Person[] = [
    {
      key: '1',
      nameUser: 'Juanes32',
      email: 'juanperes@gmail.com',
      quantityReport: '2'
    },
    {
      key: '2',
      nameUser: 'elBicho_7',
      email: 'Ronaldo7@gmail.com',
      quantityReport: '5'
    },
    {
      key: '3',
      nameUser: 'Messie',
      email: 'leo_quispe@gmail.com',
      quantityReport: '7'
    },
    {
      key: '4',
      nameUser: 'turecetafavorita',
      email: 'recetas123@gmail.com',
      quantityReport: '1'
    },
    {
      key: '5',
      nameUser: 'BrowniChocolate',
      email: 'chocolate11@gmail.com',
      quantityReport: '2'
    },
    {
      key: '6',
      nameUser: 'Elrey_Pasta',
      email: 'Pastas123@gmail.com',
      quantityReport: '3'
    },
  ];

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
