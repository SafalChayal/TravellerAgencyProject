import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TravellingAgent } from 'src/app/models/travelligent-agent.model';
@Injectable({
  providedIn: 'root'
})
export class TravelDataService {
  private apiUrl = 'https://localhost:7080/api/TravellingAgent'; // Replace 'your-api-url' with the actual API endpoint to fetch the traveling data

  constructor(private http: HttpClient) { }

  // Method to fetch traveling data
  getTravelingAgents(): Observable<TravellingAgent[]> {
    return this.http.get<TravellingAgent[]>(`${this.apiUrl}`);
  }
}
