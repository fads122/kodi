import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  private apiUrl = 'http://localhost:3000/api/flashcards'; // Adjust API URL

  constructor(private http: HttpClient) {}

  getFlashcards(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getFlashcardsByUserId(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?userId=${userId}`);
  }
}
