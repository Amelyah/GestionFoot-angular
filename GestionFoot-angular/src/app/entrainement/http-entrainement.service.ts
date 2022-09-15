import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from '../app-config.service';
import { Equipe, Match } from '../model';

@Injectable({
  providedIn: 'root'
})
export class HttpEntrainementService {

  equipe : Equipe = new Equipe();
  apiPath: string;

  constructor(private http: HttpClient, private appConfig: AppConfigService) {
    this.apiPath = this.appConfig.apiBackEndUrl + "equipe/";
    this.load();
  }
 
  load() {
    this.http.get<Equipe>(this.apiPath+1).subscribe(response => {
      this.equipe = response;
    });
  }


  entrainer(jeux:number, cohesion:number, pressing: number){
    // this.equipe.jeux = this.equipe.jeux + jeux;
    // this.equipe.cohesion = this.equipe.cohesion + cohesion;
    // this.equipe.pressing = this.equipe.pressing + pressing;

    // this.http.patch<Equipe>(this.apiPath + this.equipe.id, this.equipe)
    //   .subscribe(resp => {
    //     this.load();
    // });
  }

}
