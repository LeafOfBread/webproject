import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule , HttpResponse} from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  title = 'Registration'
  userdata = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    password: new FormControl(''),
    passwordconfirm: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
    plz: new FormControl('')
  })
    show: boolean = false;
    showConfirm: boolean = false;

    constructor(private http: HttpClient) { }

    getHelloWorld() {
      return this.http.get('http://localhost:3000', { responseType: 'text' });
    }
  
    ngOnInit(){
      this.getHelloWorld().subscribe(response => {
        console.log(response);
      })
    }
  
    submitForm() {
      const inputemail = this.userdata.get('email')?.value;
      const inputpassword = this.userdata.get('password')?.value;
      const inputpasswordconfirm = this.userdata.get('passwordconfirm')?.value;
    
      if (inputemail == '' || inputpassword == '' || inputpasswordconfirm == '') {
        alert ("Es wurden nicht alle Pflichtfelder ausgefüllt!");
      } else if (inputpassword !== inputpasswordconfirm) {
        alert ("Die Passwörter stimmen nicht überein!");
      } else {
        this.http.post('http://localhost:3000/users', {
          username: inputemail,
          password: inputpassword
        }, { observe: 'response' }).subscribe((response: HttpResponse<any>) => {
          if (response.status === 201) {
            alert("User created successfully");
          } else if (response.status === 400) {
            alert("User already exists");
          }
        }, error => {
          console.error(error);
        });
      }
    }

  showPassword(){
    this.show = !this.show;
  }
  showPasswordConfirm(){
    this.showConfirm = !this.showConfirm;
  }
}
