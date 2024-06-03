import { Component, OnInit } from '@angular/core';
import { ScoreServiceComponent } from '../score-service/score-service.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score-board',
  standalone: true,
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css'],
  imports: [CommonModule]
})
export class ScoreBoardComponent implements OnInit {
  highscores: any[] = [];

  constructor(private scoreService: ScoreServiceComponent) { }

  ngOnInit(): void {
    this.scoreService.getHighscores().subscribe(highscores => {
      this.highscores = highscores;
    });
  }
}