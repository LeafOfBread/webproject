import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Highscore {
  username: string;
  score: number;
}

@Injectable({
  providedIn: 'root',
})

export class ScoreServiceComponent {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/highscores'; //url ändern auf die url des servers
  }

  getHighscores(): Observable<Highscore[]> {
    return this.http.get<Highscore[]>(this.url);
  }

  postHighscore(username: string, score: number): Observable<Highscore> {
    return this.http.post<Highscore>(this.url, { username, score });
  }
}
