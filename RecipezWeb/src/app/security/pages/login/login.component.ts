import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private modal: NzModalService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  login(){

    if (this.validateForm.valid) {
      if(this.validateForm.get("userName")?.value == "recipez@admin.pe" && this.validateForm.get("password")?.value == "q1w2e3r4"){
        this.router.navigateByUrl('/reporte/pagos');
      }else{
        this.error();
      }
    }else{
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
    
  }

  error(): void {
    this.modal.error({
      nzTitle: 'Usuario o Contraseña Incorrectos',
      nzContent: 'Verifique la informacion ingresada'
    });
  }

  
}
