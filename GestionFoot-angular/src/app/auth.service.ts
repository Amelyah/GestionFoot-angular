import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from './app-config.service';
import { Compte } from './model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  compte: Compte;

  constructor(private http: HttpClient, private appConfig: AppConfigService) { }

  connexion(login: string, password: string): Observable<Compte> {
    return this.http.post<Compte>(this.appConfig.apiBackEndUrl + "compte/login", {
      "login": login,
      "password": password
    });
  }

  inscription(login: string, password: string, email: string): Observable<Compte> {
    return this.http.post<Compte>(this.appConfig.apiBackEndUrl + "compte", {
      "login": login,
      "password": password,
      "email": email
    });
  }
}
