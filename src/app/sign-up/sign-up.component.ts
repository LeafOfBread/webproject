import { Component, input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
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

  submitForm() {
    const inputemail = this.userdata.get('email')?.value;
    const inputpassword = this.userdata.get('password')?.value;
    const inputpasswordconfirm = this.userdata.get('passwordconfirm')?.value;

    if (inputemail == '' || inputpassword == '' || inputpasswordconfirm == ''){
      alert ("Es wurden nicht alle Pflichtfelder ausgefüllt!");
    }
    else {
      alert ("Erfolgreich registriert!");
    }
  }
  showPassword(){
    this.show = !this.show;
  }
  showPasswordConfirm(){
    this.showConfirm = !this.showConfirm;
  }
}
