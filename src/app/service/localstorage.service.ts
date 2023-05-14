import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../model/login-request';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  
  credentialsExists() {
    return this.getUsername() && this.getPassword();
  }
  
  clearCredentias() {
    this.clearUsername();
    this.clearPassword();
  }

  clearUsername() {
    localStorage.removeItem('username');
  }

  clearPassword() {
    localStorage.removeItem('password');
  }

  setUsername(username: string) {
    return localStorage.setItem('username', username);
  }

  setPassword(password: string) {
    return localStorage.setItem('password', password);
  }

  getUsername() {
    return localStorage.getItem('username');
  }

  getPassword() {
    return localStorage.getItem('password');
  }
}
