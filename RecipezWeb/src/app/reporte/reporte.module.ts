import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SharedModule } from '../shared/shared.module'

import { ReporteRoutingModule } from './reporte-routing.module';
import { Reporte1Component } from './pages/reporte1/reporte1.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReporteRoutingModule
  ],
  declarations: [
    Reporte1Component
  ],
  providers : [
    DatePipe
  ]
  
})
export class ReporteModule { }
