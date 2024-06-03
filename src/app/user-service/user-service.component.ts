import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private username: string = '';
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {} // httpclient injecten

  login(username: string): void {
    this.isLoggedInSubject.next(true);
    this.username = username;
  }

  logout(): void {
    const token = localStorage.getItem('sessionToken');
    this.http.delete('http://localhost:3000/sessions', { body: { token } }).subscribe(() => {
  localStorage.removeItem('sessionToken');
  this.isLoggedInSubject.next(false);
});
  }

  getUsername(): string {
    return this.username;
  }
}