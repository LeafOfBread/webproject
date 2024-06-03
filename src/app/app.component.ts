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
import { UserService } from './user-service/user-service.component';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [ScoreServiceComponent, UserService],
  imports: [SignUpComponent,
    LoginComponent,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Awesome Score Board';
  isLoggedIn = false;

  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  logout(): void {
    this.userService.logout();
  }
}