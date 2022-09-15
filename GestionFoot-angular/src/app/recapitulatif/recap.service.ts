import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attaquant, Defenseur, Match, Milieu } from '../model';

@Injectable({
  providedIn: 'root'
})
export class RecapService {

  constructor(private http : HttpClient) { }


  lancerStrategieDefense(
    idEquieCourant : number,
    idEquipeAdversaire : number,
    matchCourant : number
  ) {
      let sommeCourant = 0;
      let sommeadversaire = 0;
      let scoreDom = 0;
      let scoreExt = 0;
      this.http.get<Array<Defenseur>>(`http://localhost:8080/api/defenseur/equipe/${idEquieCourant}`).subscribe( resp => {
        for(let def of resp) {
          sommeCourant = sommeCourant + def["physique"] + def["technique"]+def["tactique"]+def["mental"]+def["tauxInterception"]+def["capaciteRelance"];
        }
        this.http.get<Array<Defenseur>>(`http://localhost:8080/api/defenseur/equipe/${idEquipeAdversaire}`).subscribe( resp => {
        for(let def of resp) {
          sommeadversaire = sommeadversaire + def["physique"] + def["technique"]+def["tactique"]+def["mental"]+def["tauxInterception"]+def["capaciteRelance"];
        }
        if (sommeCourant<sommeadversaire) {
          scoreExt = 1;
          this.http.patch<Match>(`http://localhost:8080/api/match/${matchCourant}`,{
            "scoreDom" : scoreExt,
            "scoreExt" : scoreDom,
            "fini" : true
          }).subscribe();
        }else{
          scoreDom = 1;
          this.http.patch<Match>(`http://localhost:8080/api/match/${matchCourant}`,{
            "scoreDom" : scoreExt,
            "scoreExt" : scoreDom,
            "fini" : true
          }).subscribe();
        }
        });
      });

  }

  lancerStrategieMilieu(
    idEquieCourant : number,
    idEquipeAdversaire : number,
    matchCourant : number
  ) {
      let sommeCourant = 0;
      let sommeadversaire = 0;
      let scoreDom = 0;
      let scoreExt = 0;
      this.http.get<Array<Milieu>>(`http://localhost:8080/api/milieu/equipe/${idEquieCourant}`).subscribe( resp => {
        for(let def of resp) {
          sommeCourant = sommeCourant + def["physique"] + def["technique"]+def["tactique"]+def["mental"]+def["tauxInterception"]+def["capaciteRelance"];
        }
        this.http.get<Array<Milieu>>(`http://localhost:8080/api/milieu/equipe/${idEquipeAdversaire}`).subscribe( resp => {
        for(let def of resp) {
          sommeadversaire = sommeadversaire + def["physique"] + def["technique"]+def["tactique"]+def["mental"]+def["tauxInterception"]+def["capaciteRelance"];
        }
        if (sommeCourant<sommeadversaire) {
          scoreExt = 1;
          this.http.patch<Match>(`http://localhost:8080/api/match/${matchCourant}`,{
            "scoreDom" : scoreExt,
            "scoreExt" : scoreDom,
            "fini" : true
          }).subscribe();
        }else{
          scoreDom = 1;
          this.http.patch<Match>(`http://localhost:8080/api/match/${matchCourant}`,{
            "scoreDom" : scoreExt,
            "scoreExt" : scoreDom,
            "fini" : true
          }).subscribe();
        }
        });
      });

  }
  lancerStrategieAttaque(
    idEquieCourant : number,
    idEquipeAdversaire : number,
    matchCourant : number
  ) {
      let sommeCourant = 0;
      let sommeadversaire = 0;
      let scoreDom = 0;
      let scoreExt = 0;
      this.http.get<Array<Attaquant>>(`http://localhost:8080/api/attaquant/equipe/${idEquieCourant}`).subscribe( resp => {
        for(let def of resp) {
          sommeCourant = sommeCourant + def["physique"] + def["technique"]+def["tactique"]+def["mental"]+def["tauxInterception"]+def["capaciteRelance"];
        }
        this.http.get<Array<Attaquant>>(`http://localhost:8080/api/attaquant/equipe/${idEquipeAdversaire}`).subscribe( resp => {
        for(let def of resp) {
          sommeadversaire = sommeadversaire + def["physique"] + def["technique"]+def["tactique"]+def["mental"]+def["tauxInterception"]+def["capaciteRelance"];
        }
        if (sommeCourant<sommeadversaire) {
          scoreExt = 1;
          this.http.patch<Match>(`http://localhost:8080/api/match/${matchCourant}`,{
            "scoreDom" : scoreExt,
            "scoreExt" : scoreDom,
            "fini" : true
          }).subscribe();
        }else{
          scoreDom = 1;
          this.http.patch<Match>(`http://localhost:8080/api/match/${matchCourant}`,{
            "scoreDom" : scoreExt,
            "scoreExt" : scoreDom,
            "fini" : true
          }).subscribe();
        }
        });
      });

  }
}
