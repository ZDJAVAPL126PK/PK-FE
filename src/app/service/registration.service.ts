import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PatientSignup } from '../model/patient-signup';
import { DoctorSignup } from '../model/doctor-signup';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private readonly apiUrl: string = 'http://localhost:8080';

  constructor(
    private route: Router,
    private http: HttpClient,
  ) { }

signupPatient(body: PatientSignup){

  this.http.post(`${this.apiUrl}/api/signup/patient`, body).subscribe(
    (success) => {
      console.log(success);
      this.route.navigateByUrl('/login');
    },
    (err) => console.log(err)
  );
  
}

signupDoctor(body: DoctorSignup){

  this.http.post(`${this.apiUrl}/api/signup/doctor`, body).subscribe(
    (success) => {
      console.log(success);
      this.route.navigateByUrl('/login');
    },
    (err) => console.log(err)
  );
  
}

}
