import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../model/login-request';
import { Router } from '@angular/router';
import { LocalStorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly apiUrl: string = 'http://localhost:8080';

  constructor(
    private route: Router,
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  login(loginReq: LoginRequest) {
    this.http.post(`${this.apiUrl}/auth/login`, loginReq).subscribe(
      () => {
        this.localStorageService.setUsername(loginReq.username)
        this.localStorageService.setPassword(loginReq.password)

        this.route.navigateByUrl('/');
      },
      (err) => console.log(err)
    );
  }

  logout() {
    this.http.post(`${this.apiUrl}/auth/logout`, {}).subscribe(
      () => {
        this.localStorageService.clearCredentias();
        this.route.navigateByUrl('/login');
      },
      (err) => console.log(err)
    );
  }
}
