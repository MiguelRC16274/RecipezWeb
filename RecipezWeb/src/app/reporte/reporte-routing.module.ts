import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Reporte1Component } from './pages/reporte1/reporte1.component';
import { Reporte2Component } from './pages/reporte2/reporte2.component';
import { Reporte3Component } from './pages/reporte3/reporte3.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component'

const routes: Routes = [
  {
    path: 'reporte',
    component: SidebarComponent,
    children: [
      {
        path: 'pagos',
        component: Reporte1Component
      },
      {
        path: 'usuarios',
        component: Reporte2Component
      },
      {
        path: 'recetas',
        component: Reporte3Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteRoutingModule { }
