import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; // Add this import
@Injectable({
  providedIn: 'root',
})

export class ScoreServiceComponent {
  constructor(private http: HttpClient) { } // Change the type to HttpClient

  getHighscores(): Observable<any> {
    return this.http.get('http://localhost:3000/highscores');
  }
}
