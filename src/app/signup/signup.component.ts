import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientSignup } from '../model/patient-signup';
import { DoctorSignup } from '../model/doctor-signup';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  isDoctorSignup: boolean = false;

  patientSignupForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    pesel: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phoneNumber: new FormControl('', Validators.required),
  });

  doctorSignupForm = new FormGroup({
    title: new FormControl(''),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    pesel: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phoneNumber: new FormControl('', Validators.required),
    description: new FormControl(''),
  });

  constructor(private registrationSevice: RegistrationService){}

  submitPatinet() {
    const username = this.patientSignupForm.controls.username.value;
    const password = this.patientSignupForm.controls.password.value;
    const name = this.patientSignupForm.controls.name.value;
    const surname = this.patientSignupForm.controls.surname.value;
    const pesel = this.patientSignupForm.controls.pesel.value;
    const email = this.patientSignupForm.controls.email.value;
    const phoneNumber = this.patientSignupForm.controls.phoneNumber.value;

    const patient = {
      username,
      password,
      name,
      surname,
      pesel,
      email,
      phoneNumber,
    } as PatientSignup;
    
    this.registrationSevice.signupPatient(patient);
  }

  submitDoctor() {
    const title = this.doctorSignupForm.controls.title?.value;
    const username = this.doctorSignupForm.controls.username.value;
    const password = this.doctorSignupForm.controls.password.value;
    const name = this.doctorSignupForm.controls.name.value;
    const surname = this.doctorSignupForm.controls.surname.value;
    const pesel = this.doctorSignupForm.controls.pesel.value;
    const email = this.doctorSignupForm.controls.email.value;
    const phoneNumber = this.doctorSignupForm.controls.phoneNumber.value;
    const description = this.doctorSignupForm.controls.description?.value;

    const doctor = {
      title,
      username,
      password,
      name,
      surname,
      pesel,
      email,
      phoneNumber,
      description,
    } as DoctorSignup;

    this.registrationSevice.signupDoctor(doctor);

  }

  toggleForm(value: boolean) {
    this.isDoctorSignup = value;
  }
}
