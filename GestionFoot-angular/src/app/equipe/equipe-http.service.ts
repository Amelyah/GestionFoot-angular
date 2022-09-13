import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attaquant, Defenseur, Entraineur, Equipe, Gardien, Joueur, Milieu } from '../model';

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
  getAllEntraineur() : Observable<Array<Entraineur>>{
    return this.http.get<Array<Entraineur>>("http://localhost:8080/api/entraineur")
  }
  createEquipeMinimum(equipe : Equipe) : Observable<Equipe> {
    return this.http.post<Equipe>("http://localhost:8080/api/equipe", equipe);
  }
  addGardienToEquipe(equipeId : number,idGardien : number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/equipe/${equipeId}/addGardien/${idGardien}`,{});
  }
  addDefenseurToEquipe(equipeId : number,idDefenseur : number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/equipe/${equipeId}/addDefenseur/${idDefenseur}`,{});
  }
  addMilieuToEquipe(equipeId : number,idMilieu : number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/equipe/${equipeId}/addMilieu/${idMilieu}`,{});
  }
  addAttaquantToEquipe(equipeId : number,idAttaquant : number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/equipe/${equipeId}/addattaquant/${idAttaquant}`,{});
  }
 
  
  

}
