import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.css']
})
export class RecapitulatifComponent implements OnInit {

  matchCourant : number;
  idEquieCourant : number;
  idEquipeAdversaire : number;
  idArbitre : number ;
  strategieCourante : string ;
  strategieAdversaire : string ;

  constructor(private route : ActivatedRoute) { 
      this.route.queryParams.subscribe( resp => {
        this.matchCourant = resp["idMatch"];
        this.idEquieCourant = resp["idEquipeCourante"];
        this.idEquipeAdversaire = resp["idEquipeAdverse"];
        this.idArbitre = resp["idArbitre"];
        this.strategieCourante = resp["strategieUser"];
        this.strategieAdversaire = resp["strategieAdverse"];
        console.log("bouooouuu : ",this.strategieAdversaire);
      });


  }

  ngOnInit(): void {
  }

  // jouerMatch(strategie : string){
  //   switch(strategie){
  //     case this.strategieCourante:
  //       this.matchService.lancerStrategieAttaquant();

  //       this.http.getByIdWithJoueur get<Equipe>(this.apiPath+id).subscribe(response => {
  //         response["listeJoueur"] = {id}
  //         this.equipe = response;
  //       });
        /*
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
      //   break;
      // case "milieu":
        //this.matchService.lancerStrategieMilieu();
        // même déroulé que strat attaquant
      //   break;
      // case "defenseur":
        //this.matchService.lancerStrategieDefenseur();
        // même déroulé que strat attaquant
  //       break;
  //     default:
  //       break;
  //   }
  // }

}
