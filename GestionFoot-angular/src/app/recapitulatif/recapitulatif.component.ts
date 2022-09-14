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

}
