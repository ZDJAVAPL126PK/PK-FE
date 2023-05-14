import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../model/patient';
import { PatientsService } from '../service/patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {


  $patients: Observable<Patient[]> | undefined;

  constructor(private patientsService: PatientsService) {}

  ngOnInit(): void {
    this.$patients = this.patientsService.getPatients();
  }
}
