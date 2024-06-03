import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
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
  dummyemail: string = 'test@test.at';
  dummypassword: string = '12345678';

  submitLogin(){
    console.log("Login Submitted");
    this.login();
  }

  constructor(private http: HttpClient){}

  getHelloWorld() {
    return this.http.get('http://localhost:3000', { responseType: 'text' });
  }

  ngOnInit(){
    this.getHelloWorld().subscribe(response => {
      console.log(response);
    })
  }

  passwordVisibility(){
    this.showPassword = !this.showPassword;
  }

  loginOld(){
    const inputemail = this.userdata.get('email')?.value;
    const inputpassword = this.userdata.get('password')?.value;

    if (inputemail != '' || inputpassword!= ''){
    if (inputemail == this.dummyemail && inputpassword == this.dummypassword){
      alert("Login successful!");
    }
    else {
      alert("Login failed.");
    }
  }
  else {
    alert("Email und Passwort sind Pflichtfelder!");
  }
}

login() {
  const email = this.userdata.get('email')?.value;
  const password = this.userdata.get('password')?.value;
  this.http.post<{ token: string }>('http://localhost:3000/sessions', {username: email, password: password}).subscribe(response => {
    localStorage.setItem('sessionToken', response.token);
    console.log(response);
  }, error => {
    console.error(error);
  });
}
}