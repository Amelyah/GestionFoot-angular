import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecapService } from './recap.service';

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

  constructor(private route : ActivatedRoute,private recapService :RecapService) { 
      this.route.queryParams.subscribe( resp => {
        this.matchCourant = resp["idMatch"];
        this.idEquieCourant = resp["idEquipeCourante"];
        this.idEquipeAdversaire = resp["idEquipeAdverse"];
        this.idArbitre = resp["idArbitre"];
        this.strategieCourante = resp["strategieUser"];
        this.strategieAdversaire = resp["strategieAdverse"];
        console.log("bouooouuu : ",this.strategieAdversaire);
        this.jouerMatch();
      });


  }

  ngOnInit(): void {
  }

    jouerMatch(){
      switch(this.strategieCourante){
        case "Defense" :
          this.recapService.lancerStrategieDefense(
          this.idEquieCourant,this.idEquipeAdversaire,this.matchCourant);
          break;
        case "Milieu" :
          this.recapService.lancerStrategieMilieu(
          this.idEquieCourant,this.idEquipeAdversaire,this.matchCourant);
          break;
        case "Attaque" :
        this.recapService.lancerStrategieAttaque(
        this.idEquieCourant,this.idEquipeAdversaire,this.matchCourant);
          break;
      }
    }
}
