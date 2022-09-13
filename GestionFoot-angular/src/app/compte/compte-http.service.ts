import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConfigService } from "../app-config.service";
import { Compte } from "../model";



@Injectable({
    providedIn: 'root'
  })
  export class CompteHttpService {
  
    compte: Compte;
    apiPath: string;
  
    constructor(private http: HttpClient, private appConfig: AppConfigService) {
      this.apiPath = this.appConfig.apiBackEndUrl + "compte/";
      this.load();
    }
  
    load() {
      this.http.get<Compte>(this.apiPath+localStorage.getItem('id')).subscribe(response => {
        this.compte = response;
      });
    }
  
    findById(id: number): Observable<Compte> {
      return this.http.get<Compte>(this.apiPath+id);
    }
  
    save(compte: Compte) {
      if(compte.id) { // modification
        this.http.put<Compte>(this.apiPath + compte.id, compte)
          .subscribe(resp => {
            this.load();
          });
      } else { // création
        this.http.post<Compte>(this.apiPath, compte)
          .subscribe(resp => {
            this.load();
          });
      }
    }
}