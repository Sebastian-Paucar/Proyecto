import { Component} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { LoginService } from '../services/auth/login.service';
import { LoginRequest } from '../services/auth/loginRequest';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, ReactiveFormsModule, CheckboxModule, ButtonModule, StyleClassModule, NgIf,MessagesModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService]
})

export class LoginComponent {
  constructor(private fb: FormBuilder, private routes:Router, private loginService:LoginService,private messageService: MessageService
    ,private primengConfig: PrimeNGConfig) { }
  inLogin = false;
  showAlert = false;
  message = '';


  profileForm = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
    remember: [false]
  });
 
  get name() {
    return this.profileForm.controls.name;
  }
  get password() {
    return this.profileForm.controls.password;

  }
  login() {
    if(this.profileForm.valid){
      this.inLogin=this.loginService.login(this.profileForm.value as LoginRequest);
      if(this.inLogin){
        this.routes.navigate(['/home']);
      }
      this.profileForm.reset();
      this.showAlert=true;
      this.message = 'Usuario o contraseña incorrectos';
    }else{
      this.profileForm.markAllAsTouched();
      this.profileForm.reset();  
      this.showAlert = true;
      this.message = 'Llene las credenciales';
    };
  }
  closeAlert() {
    this.showAlert = false;
  }

  
}

