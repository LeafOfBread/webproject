import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { empty } from 'rxjs';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
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
  }

  passwordVisibility(){
    this.showPassword = !this.showPassword;
  }

  login(){
    const inputemail = this.userdata.get('email')?.value;
    const inputpassword = this.userdata.get('password')?.value;

    if (inputemail != '' && inputpassword!= ''){
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

}