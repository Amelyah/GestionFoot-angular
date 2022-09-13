import { Component, OnInit } from '@angular/core';
import { EquipeHttpService } from '../equipe/equipe-http.service';
import { Equipe } from '../model';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  idGardien : Array<number> = new Array<number>();
  idDefenseur : Array<number> = new Array<number>();
  idMilieu: Array<number> = new Array<number>();
  idAttaquant : Array<number> = new Array<number>();

  idAdversaireGardien : number;
  idAdversaireDefenseur1 : number;
  idAdversaireDefenseur2 : number;
  idAdversaireMilieu1 : number;
  idAdversaireMilieu2 : number;
  idAdversaireAttaquant1 : number;
  idAdversaireAttaquant2 : number;


  constructor(private equipeHttp : EquipeHttpService) { 
    this.equipeHttp.getAllGardien().subscribe( resp => {
      for (const gard of resp) {
        this.idGardien.push(gard["id"]);
      }
      this.idGardien = this.randomize(this.idGardien);
      this.idAdversaireGardien = this.idGardien.pop();
      console.log("id choisi gardien : ",this.idAdversaireGardien);
    });
    this.equipeHttp.getAllDefenseur().subscribe( resp => {
      for (const gard of resp) {
        this.idDefenseur.push(gard["id"]);
      }
      this.idDefenseur = this.randomize(this.idDefenseur);
      this.idAdversaireDefenseur1 = this.idDefenseur.pop();
      this.idAdversaireDefenseur2 = this.idDefenseur.pop();
      console.log("id choisi defenseur : ",this.idAdversaireDefenseur1,this.idAdversaireDefenseur2);
    });
    this.equipeHttp.getAllMillieu().subscribe( resp => {
      for (const gard of resp) {
        this.idMilieu.push(gard["id"]);
      }
      this.idMilieu = this.randomize(this.idMilieu);
      this.idAdversaireMilieu1 = this.idMilieu.pop();
      this.idAdversaireMilieu2 = this.idMilieu.pop();
      console.log("id choisi milieu : ",this.idAdversaireMilieu1,this.idAdversaireMilieu2);
    });
    this.equipeHttp.getAllAttaquant().subscribe( resp => {
      for (const gard of resp) {
        this.idAttaquant.push(gard["id"]);
      }
      this.idAttaquant = this.randomize(this.idAttaquant);
      this.idAdversaireAttaquant1 = this.idAttaquant.pop();
      this.idAdversaireAttaquant2 = this.idAttaquant.pop();
      console.log("id choisi Attaquant : ",this.idAdversaireAttaquant1,this.idAdversaireAttaquant2);
    });
  }
  getRandomInt(max : number) {
    return Math.floor(Math.random() * max);
  }
  randomize(tab : Array<number>):Array<number> {
    let i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
    return tab;
  }

  ngOnInit(): void {
  }

}


