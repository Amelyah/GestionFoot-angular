import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  constructor(){}
  //constructor(private matchService: MatchHttpService) { }

  ngOnInit(): void {
  }



  jouerMatch(strategie : string){
    switch(strategie){
      case "attaquant":
        //this.matchService.lancerStrategieAttaquant();
        /*
        Dans le service Match :
        this.http.get<Equipe>(this.apiPath+id).subscribe(response => {
          this.equipe = response;
        });
        
        this.http.get<Equipe>(this.apiPath+"attaquant").subscribe(response => {
          this.attaquants = response;
        });

        this.http.get<Equipe>(this.apiPath+"gardien").subscribe(response => {
          this.gardien = response;
        });

        pour tous les attaquants du tab attaquants faire
          somme += attaquant.getStats
        fin pour

        somme += gardien.getStats

        traitement de la somme selon un calcul défini

        --> Pareil pour équipe adverse
      
        */
        break;
      case "milieu":
        //this.matchService.lancerStrategieMilieu();
        // même déroulé que strat attaquant
        break;
      case "defenseur":
        //this.matchService.lancerStrategieDefenseur();
        // même déroulé que strat attaquant
        break;
      default:
        break;
    }

    /*
      comparaison de la somme entre équipe joueur et équipe adverse

      if(sommeJoueur > sommeAdverse){
        scoreJoueur++;
        gagnant = equipeJoueur;
      }else{
        scoreAdverse++;
        gagnant = equipeAdverse;
      }
    
    */
  }

  // Redirection vers page récapitulatif

}

