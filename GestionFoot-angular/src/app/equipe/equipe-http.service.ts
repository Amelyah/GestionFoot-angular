import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joueur } from '../model';

@Injectable({
  providedIn: 'root'
})


export class EquipeHttpService {

  joueurs : Array<Joueur>;

  constructor(private http : HttpClient) {
     this.getAllJoueur();   
  }

  getAllJoueur() : Observable<Array<Joueur>>{
    return this.http.get<Array<Joueur>>("http://localhost:8080/api/joueur")
  }
  // http://localhost:8080/api/joueur

  // http://localhost:8080/api/equipe + json 
  // {
  //   "pays": "France",
  //   "classement": 0,
  //   "couleur": "Bleu"
  // }


}
