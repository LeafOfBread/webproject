import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { response } from 'express';
import { UserService } from '../user-service/user-service.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  title = 'Login';
  userdata = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('')
  });

  showPassword: boolean = false;

  submitLogin(){
    console.log("Login Submitted");
    this.login();
  }

  constructor(private http: HttpClient, private userService: UserService){}

  passwordVisibility(){
    this.showPassword = !this.showPassword;
  }

  login() {
    const email = this.userdata.get('email')?.value;
    const password = this.userdata.get('password')?.value;
    this.http.post<{ token: string }>('http://localhost:3000/sessions', {username: email, password: password}).subscribe(response => {
      localStorage.setItem('sessionToken', response.token);
      console.log(response);
      
      if (email) { // check ob null oder undefinded
        this.userService.login(email);
      }
    }, error => {
      console.error(error);
    });
  }
}