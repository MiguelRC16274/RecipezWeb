import { Component, OnInit } from '@angular/core';
import { collection, Firestore, getDocs, writeBatch, doc, query, orderBy, limit, where } from '@angular/fire/firestore';
import { NzModalService } from 'ng-zorro-antd/modal';

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
  isVisibleDes = false;
  isVisibleIg = false;
  isConfirmLoading = false;
  reportRecipes: ReportesReceta[] = [];
  infoReportes: any[] = [];

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

  constructor(private afs: Firestore, private modal: NzModalService) { }

  ngOnInit(): void {
    this.leerRecetasReportadas()
  }

  async leerRecetasReportadas() {
    this.reportRecipes = [];
    const db = collection(this.afs, 'recipes')
    const q = query(db, where("status", "==", true));
    const querySnapshot2 = await getDocs(q);
    querySnapshot2.forEach((doc) => {
      let contador = 0;
      let asd2: any = []

      doc.get('reports').forEach((l: any) => {
        contador++;
        asd2.push(l['text']);
      })

      if (contador != 0) {
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

  }

  showModal(data: any): void {
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

  deshabilitar(data: any): void {
    this.modal.confirm({
      nzTitle: '<i>Quiere deshabilitar la receta?</i>',
      nzContent: '<b>La receta se dejara de mostrar en la aplicacion, esta seguro?</b>',
      nzOnOk: () => {
        this.deshabiltiarReceta(data)
      }
    });
    /*this.isVisibleDes = true;
    console.log(data);*/
  }

  async deshabiltiarReceta(data: any) {
    const batch = writeBatch(this.afs);
    const sfRef = doc(this.afs, 'recipes', data);
    batch.update(sfRef, { "status": false });
    await batch.commit();
    this.leerRecetasReportadas()
  }

  ignorar(data: any) {
    this.modal.confirm({
      nzTitle: '<i>Quiere ignorar los reportes de la Receta?</i>',
      nzContent: '<b>La reportes registrados se eliminaran, esta seguro?</b>',
      nzOnOk: () => {
        this.ignorarReporte(data)
      }
    });
  }

  async ignorarReporte(data: any) {
    const batch = writeBatch(this.afs);
    const sfRef = doc(this.afs, 'recipes', data);
    batch.update(sfRef, { "reports": [] });
    await batch.commit();
    this.leerRecetasReportadas()
  }

}
