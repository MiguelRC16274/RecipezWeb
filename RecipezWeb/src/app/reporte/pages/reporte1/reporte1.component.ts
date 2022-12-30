import { Component, OnInit } from '@angular/core';
import { collection, Firestore, getDocs, writeBatch, doc, query, orderBy, limit, where, getCountFromServer } from '@angular/fire/firestore';
import { NzModalService } from 'ng-zorro-antd/modal';
import Chart from 'chart.js/auto';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html',
  styleUrls: ['./reporte1.component.scss']
})
export class Reporte1Component implements OnInit {

  usuariosActivos = 0;
  usuariosInactivos = 0;

  graficoDonas: any = [];

  constructor(private afs: Firestore, private modal: NzModalService) {

  }

  ngOnInit(): void {
    this.graficoDonas = new Chart('UsuariosActivos', {
      type: 'doughnut',
      data: {
        labels: ['Premiun', 'No Premiun'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [this.usuariosActivos, this.usuariosInactivos],
            backgroundColor: [
              'rgba(60, 179, 113,0.5)',
              'rgba(255, 0, 0,0.9)'
            ]
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Grafico de usuarios Premiun y no Premiun Actuales'
          }
        }
      }
    });
    this.leerDoctores();
  }

  async leerDoctores() {
    this.removeData()
    this.usuariosActivos = 0;
    this.usuariosInactivos = 0;
    const db = collection(this.afs, 'users')
    const q = query(db, where("subscription", "==", true));
    const querySnapshotActivos = await getCountFromServer(q);
    this.usuariosActivos = querySnapshotActivos.data().count;

    const w = query(db, where("subscription", "==", false));
    const querySnapshotInactivos = await getCountFromServer(w);
    this.usuariosInactivos = querySnapshotInactivos.data().count;
    
    setTimeout(() => {
      this.addData();
    }, 500);
  }

  removeData() {
    console.log(this.graficoDonas.data?.datasets.data)
    if (this.graficoDonas.data?.datasets) {
      this.graficoDonas.data.datasets.forEach((dataset: any) => {
        dataset.data = new Array;
      });
      this.graficoDonas.update();
    }
  }

  addData() {
    if(this.graficoDonas.data?.datasets){
      this.graficoDonas.data?.datasets[0].data.push(this.usuariosActivos, this.usuariosInactivos);
      this.graficoDonas.update();
    }
    
  }
}
