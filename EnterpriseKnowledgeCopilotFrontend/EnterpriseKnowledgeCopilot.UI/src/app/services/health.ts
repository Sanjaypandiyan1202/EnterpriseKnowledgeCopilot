import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HealthResponse {
  status: string;
  application: string;
  version: string;
}

@Injectable({
  providedIn: 'root'
})
export class HealthService {
  private readonly apiUrl = 'https://localhost:7056/api/Health';

  constructor(private http: HttpClient) {}

  getHealth(): Observable<HealthResponse> {
    return this.http.get<HealthResponse>(this.apiUrl);
  }
}