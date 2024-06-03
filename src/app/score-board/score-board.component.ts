import { Component, OnInit } from '@angular/core';
import { ScoreServiceComponent } from '../score-service/score-service.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../user-service/user-service.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-score-board',
  standalone: true,
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css'],
  imports: [CommonModule,
    FormsModule
  ]
})

export class ScoreBoardComponent implements OnInit {
  highscores: any[] = [];
  username: string = '';
  score: number = 0;
  isLoggedIn: boolean = false;

  constructor(
    private scoreService: ScoreServiceComponent,  //scoreservice einbinden
    private userService: UserService // userService einbinden
  ) { }
  

  ngOnInit(): void {
    this.userService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      if (this.isLoggedIn) {
        this.username = this.userService.getUsername();
      }
    });
    this.scoreService.getHighscores().subscribe(highscores => {
      this.highscores = highscores.sort((a: Highscore, b: Highscore) => b.score - a.score);
    });
  }
  
  sendHighscore(): void {
    if (!this.isLoggedIn) {
      return; //highscore nicht senden, falls nicht eingelogged
    }
    this.scoreService.postHighscore(this.username, this.score).subscribe(response => {
      console.log(response);
      // refresh the highscores
      this.scoreService.getHighscores().subscribe(highscores => {
        this.highscores = highscores;
      });
    });
  }
}
interface Highscore {
  score: number;
}