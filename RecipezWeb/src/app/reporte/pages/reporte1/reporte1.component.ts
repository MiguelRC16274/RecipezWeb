import { Component, OnInit } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';

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

  options={plugins: {
    legend: { display: false }}}



    constructor(private afs: Firestore) {
      this.leerDoctores();
     }

     ngOnInit(): void {
      this.leerDoctores();
    }

    async leerDoctores() {
      const querySnapshot = await getDocs(collection(this.afs, 'users'));
      querySnapshot.forEach((doc) => {
        console.log(doc.get("subscription"));
        
      });
      
    }
}
