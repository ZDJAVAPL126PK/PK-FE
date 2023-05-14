import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  private readonly apiUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiUrl}/api/patients`);
  }
}
