import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { ScoreServiceComponent } from './score-service/score-service.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [AppComponent, ScoreServiceComponent],
  imports: [SignUpComponent,
    LoginComponent,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Awesome Score Board';
  constructor(private http: HttpClient) { } // Change the type to HttpClient
}