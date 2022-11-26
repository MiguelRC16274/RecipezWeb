import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SharedModule } from '../shared/shared.module'

import { ReporteRoutingModule } from './reporte-routing.module';
import { Reporte1Component } from './pages/reporte1/reporte1.component';
import { Reporte2Component } from './pages/reporte2/reporte2.component';
import { Reporte3Component } from './pages/reporte3/reporte3.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReporteRoutingModule
  ],
  declarations: [
    Reporte1Component,
    Reporte2Component,
    Reporte3Component
  ],
  providers : [
    DatePipe
  ]
  
})
export class ReporteModule { }
