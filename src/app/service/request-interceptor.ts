import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './localstorage.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private localStorageSevice: LocalStorageService) {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.localStorageSevice.credentialsExists()) {

      const username = this.localStorageSevice.getUsername();
      const password = this.localStorageSevice.getPassword();
      const base64Creds = window.btoa(`${username}:${password}`);
      
      httpRequest = httpRequest.clone({
        setHeaders: { Authorization: `Basic ${base64Creds}` },
      });
    }

    return next.handle(httpRequest);
  }
}
