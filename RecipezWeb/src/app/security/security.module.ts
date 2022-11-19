import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SharedModule } from '../shared/shared.module'

import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SecurityRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  providers : [
    DatePipe
  ]
})
export class SecurityModule { }
