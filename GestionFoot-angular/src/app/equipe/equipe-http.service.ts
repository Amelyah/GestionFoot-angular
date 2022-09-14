import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arbitre, Attaquant, Defenseur, Entraineur, Equipe, Gardien, Joueur, Match, Milieu } from '../model';

@Injectable({
  providedIn: 'root'
})


export class EquipeHttpService {


  constructor(private http : HttpClient) {  
  }

  getAllArbitre() : Observable<Array<Arbitre>>{
    return this.http.get<Array<Arbitre>>("http://localhost:8080/api/arbitre")
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
  addEntraineurToEquipe(equipeId : number,idEntraineur : number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/equipe/${equipeId}/addentraineur/${idEntraineur}`,{});
  }

  getGardienById(id : number) : Observable<Gardien>{
    return this.http.get<Gardien>("http://localhost:8080/api/gardien/"+id) ;
  }
  getDefenseurnById(id : number) : Observable<Defenseur>{
    return this.http.get<Defenseur>("http://localhost:8080/api/defenseur/"+id) ;
  }
  getMilieuById(id : number) : Observable<Milieu>{
    return this.http.get<Milieu>("http://localhost:8080/api/milieu/"+id) ;
  }
  getAttaquantById(id : number) : Observable<Attaquant>{
    return this.http.get<Attaquant>("http://localhost:8080/api/attaquant/"+id) ;
  }
  getEntraineurById(id : number) : Observable<Entraineur>{
    return this.http.get<Entraineur>("http://localhost:8080/api/entraineur/"+id) ;
  }
  getArbitreById(id : number) : Observable<Arbitre>{
    return this.http.get<Arbitre>("http://localhost:8080/api/arbitre/"+id) ;
  }
  getEquipeById(id : number) : Observable<Equipe>{
    return this.http.get<Equipe>("http://localhost:8080/api/equipe/"+id) ;
  }
  createMatchMinimum() : Observable<Match>{
    return this.http.post<Match>(`http://localhost:8080/api/match`,{});
  }
  

}
