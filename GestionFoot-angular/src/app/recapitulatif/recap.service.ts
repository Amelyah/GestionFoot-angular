import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from '../app-config.service';
import { Attaquant, Defenseur, Equipe, Match, Milieu } from '../model';

@Injectable({
  providedIn: 'root'
})
export class RecapService {
  scoreDomCourant : number;
  scoreExtCourant : number;

  defenseursCourant : Array<Defenseur>;
  attaquantsCourant : Array<Attaquant>;
  milieuxCourant : Array<Milieu>;

  defenseursAdverse : Array<Defenseur>;
  attaquantsAdverse : Array<Attaquant>;
  milieuxAdverse : Array<Milieu>;

  constructor(private http : HttpClient) {
   }


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
        this.defenseursCourant = resp;
        this.http.get<Array<Milieu>>(`http://localhost:8080/api/milieu/equipe/${idEquieCourant}`).subscribe( resp => {
          this.milieuxCourant = resp;
          this.http.get<Array<Attaquant>>(`http://localhost:8080/api/attaquant/equipe/${idEquieCourant}`).subscribe( resp => {
            this.attaquantsCourant = resp;
          })
        });

        for(let def of resp) {
          sommeCourant = sommeCourant + def["physique"] + def["technique"]+def["tactique"]+def["mental"]+def["tauxInterception"]+def["capaciteRelance"];
        }
        this.http.get<Array<Defenseur>>(`http://localhost:8080/api/defenseur/equipe/${idEquipeAdversaire}`).subscribe( resp => {
          this.defenseursAdverse = resp;
          this.http.get<Array<Milieu>>(`http://localhost:8080/api/milieu/equipe/${idEquipeAdversaire}`).subscribe( resp => {
            this.milieuxAdverse = resp;
            this.http.get<Array<Attaquant>>(`http://localhost:8080/api/attaquant/equipe/${idEquipeAdversaire}`).subscribe( resp => {
              this.attaquantsAdverse = resp;
            })
          });

          for(let def of resp) {
            sommeadversaire = sommeadversaire + def["physique"] + def["technique"]+def["tactique"]+def["mental"]+def["tauxInterception"]+def["capaciteRelance"];
          }
          if (sommeCourant<sommeadversaire) {
            scoreExt = 1;
            this.scoreExtCourant = scoreExt;
            this.scoreExtCourant = scoreExt;
            this.http.patch<Match>(`http://localhost:8080/api/match/${matchCourant}`,{
              "scoreDom" : scoreExt,
              "scoreExt" : scoreDom,
              "fini" : true
            }).subscribe();
          }else{
            scoreDom = 1;
            this.scoreExtCourant = scoreExt;
            this.scoreDomCourant = scoreDom;
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
        this.milieuxCourant = resp;
        this.http.get<Array<Defenseur>>(`http://localhost:8080/api/defenseur/equipe/${idEquieCourant}`).subscribe( resp => {
          this.defenseursCourant = resp;
          this.http.get<Array<Attaquant>>(`http://localhost:8080/api/attaquant/equipe/${idEquieCourant}`).subscribe( resp => {
            this.attaquantsCourant = resp;
          })
        });

        for(let def of resp) {
          sommeCourant = sommeCourant + def["physique"] + def["technique"]+def["tactique"]+def["mental"]+def["tauxInterception"]+def["capaciteRelance"];
        }
        this.http.get<Array<Milieu>>(`http://localhost:8080/api/milieu/equipe/${idEquipeAdversaire}`).subscribe( resp => {
          this.milieuxAdverse = resp;
          this.http.get<Array<Attaquant>>(`http://localhost:8080/api/attaquant/equipe/${idEquipeAdversaire}`).subscribe( resp => {
            this.attaquantsAdverse = resp;
            this.http.get<Array<Defenseur>>(`http://localhost:8080/api/defenseur/equipe/${idEquipeAdversaire}`).subscribe( resp => {
              this.defenseursAdverse = resp;
            })
          });

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
        this.attaquantsCourant = resp;
        this.http.get<Array<Milieu>>(`http://localhost:8080/api/milieu/equipe/${idEquieCourant}`).subscribe( resp1 => {
          this.milieuxCourant = resp1;
          this.http.get<Array<Defenseur>>(`http://localhost:8080/api/defenseur/equipe/${idEquieCourant}`).subscribe( resp2 => {
            this.defenseursCourant = resp2;
          })
        });

        for(let def of resp) {
          sommeCourant = sommeCourant + def["physique"] + def["technique"]+def["tactique"]+def["mental"]+def["tauxInterception"]+def["capaciteRelance"];
        }

        this.http.get<Array<Attaquant>>(`http://localhost:8080/api/attaquant/equipe/${idEquipeAdversaire}`).subscribe( resp => {
          this.attaquantsAdverse = resp;
          this.http.get<Array<Defenseur>>(`http://localhost:8080/api/defenseur/equipe/${idEquipeAdversaire}`).subscribe( resp => {
            this.defenseursAdverse = resp;
            this.http.get<Array<Milieu>>(`http://localhost:8080/api/milieu/equipe/${idEquipeAdversaire}`).subscribe( resp => {
              this.milieuxAdverse = resp;
            })
          });

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
