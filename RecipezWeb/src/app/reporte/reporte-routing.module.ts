import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { Reporte1Component } from './pages/reporte1/reporte1.component';
import { SidebarComponent} from '../shared/sidebar/sidebar.component'

const routes: Routes = [
  {
    path: 'reporte',
    component: SidebarComponent,
    children: [
      {
				path: 'pagos',
				component: Reporte1Component
			}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteRoutingModule { }
