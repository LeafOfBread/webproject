import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})

export class ScoreServiceComponent {
  constructor(private http: HttpClient) { } // httpclient einbinden

  getHighscores(): Observable<any> {
    return this.http.get('http://localhost:3000/highscores');
  }

  postHighscore(username: string, score: number): Observable<any> {
    const body = { username, score };
    return this.http.post('http://localhost:3000/highscores', body);
  }
}
