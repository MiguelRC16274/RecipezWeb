import { Component, OnInit } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';

interface Recipe {
  key: string;
  nameUser: string;
  nameRecipe: string;
  image: string;
  decription: string;
  quantityReport: string;
}

interface ReportesReceta {
  userID: String;
  title: String;
  image: String;
  quantityReport: number;
  reports: any[]; 
}

@Component({
  selector: 'app-reporte3',
  templateUrl: './reporte3.component.html',
  styleUrls: ['./reporte3.component.scss'],
})
export class Reporte3Component implements OnInit {

  reportRecipes: ReportesReceta[] = [];

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

  constructor(private afs: Firestore) {}

  ngOnInit(): void {
    this.leerRecetasReportadas()
  }

  async leerRecetasReportadas() {
    const querySnapshot = await getDocs(collection(this.afs, 'recipes'));
    querySnapshot.forEach((doc) => {

      //console.log(doc.get("reports"));
      let contador = 0;
      let asd2: any = []
      
      doc.get('reports').forEach((l:any)  => {
        contador++;
        asd2.push(l['text']);
        console.log(contador);
      }
       
       )


      let asd = {

        userID: doc.get("userId"),
        recipeName: doc.get("title"),
        title: doc.get("title"),
        image: doc.get('photoURL'),
        quantityReport: contador,
        reports: asd2,

      };
      this.reportRecipes.push(asd);
      

    });
    
  }
}
