import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joueur } from '../model';

@Injectable({
  providedIn: 'root'
})


export class EquipeHttpService {


  constructor(private http : HttpClient) {  
  }

  getAllGardien() : Observable<Array<Joueur>>{
    return this.http.get<Array<Joueur>>("http://localhost:8080/api/gardien")
  }
  getAllDefenseur() : Observable<Array<Joueur>>{
    return this.http.get<Array<Joueur>>("http://localhost:8080/api/defenseur")
  }
  getAllMillieu() : Observable<Array<Joueur>>{
    return this.http.get<Array<Joueur>>("http://localhost:8080/api/milieu")
  }
  getAllAttaquant() : Observable<Array<Joueur>>{
    return this.http.get<Array<Joueur>>("http://localhost:8080/api/attaquant")
  }
  
  

}
