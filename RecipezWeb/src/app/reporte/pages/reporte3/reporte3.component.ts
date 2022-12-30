import { Component, OnInit } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';

interface ReportesReceta {
  
  userID: String;
  recetaID: String;
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

  isVisible = false;
  isConfirmLoading = false;
  reportRecipes: ReportesReceta[] = [];
  infoReportes : any[] = [];

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

      //console.log(doc['id']);
      let contador = 0;
      let asd2: any = []
      
      doc.get('reports').forEach((l:any)  => {
        contador++;
        asd2.push(l['text']);
        console.log(contador);
      })

      if (contador != 0){
        let asd = {

          userID: doc.get("userId"),
          recetaID: doc['id'],
          title: doc.get("title"),
          image: doc.get('photoURL'),
          quantityReport: contador,
          reports: asd2,
  
        };
        this.reportRecipes.push(asd);
      }

    });
    console.log(this.reportRecipes);
    
  }

  showModal(data : any): void {
    this.infoReportes = data;
    console.log(data);
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  
}
