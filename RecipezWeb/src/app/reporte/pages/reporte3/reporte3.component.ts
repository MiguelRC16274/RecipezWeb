import { Component, OnInit } from '@angular/core';

interface Recipe {
  key: string;
  nameUser: string;
  nameRecipe: string;
  image: string;
  decription: string;
  quantityReport: string;
}

@Component({
  selector: 'app-reporte3',
  templateUrl: './reporte3.component.html',
  styleUrls: ['./reporte3.component.scss'],
})
export class Reporte3Component implements OnInit {
  listOfData: Recipe[] = [
    {
      key: '1',
      nameUser: 'elBicho_7',
      nameRecipe: 'prueba',
      image: '',
      decription: 'prueba',
      quantityReport: 'prueba',
    },
    {
      key: '2',
      nameUser: 'elBicho_7',
      nameRecipe: 'prueba',
      image: '',
      decription: 'prueba',
      quantityReport: 'prueba',
    },{
      key: '3',
      nameUser: 'elBicho_7',
      nameRecipe: 'prueba',
      image: '',
      decription: 'prueba',
      quantityReport: 'prueba',
    },{
      key: '4',
      nameUser: 'elBicho_7',
      nameRecipe: 'prueba',
      image: '',
      decription: 'prueba',
      quantityReport: 'prueba',
    },{
      key: '5',
      nameUser: 'elBicho_7',
      nameRecipe: 'prueba',
      image: '',
      decription: 'prueba',
      quantityReport: 'prueba',
    },{
      key: '6',
      nameUser: 'elBicho_7',
      nameRecipe: 'prueba',
      image: '',
      decription: 'prueba',
      quantityReport: 'prueba',
    },
  ];

  doughnutChartData = {
    labels: ['activos', 'Reportados', 'Desactivados'],
    datasets: [
      {
        data: [125, 10, 5],
        BackgroundColor: [
          'rgba(255,0,25,0.5',
          'rgba(255,0,25,0.5',
          'rgba(255,0,25,0.5',
        ],
      },
    ],
  };
  doughnutChartOption = {
    responsive: false,
  };

  constructor() {}

  ngOnInit(): void {}
}
