import { Component, OnInit } from '@angular/core';
import { Equipe, Joueur } from '../model';
import { EquipeHttpService } from './equipe-http.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})

export class EquipeComponent implements OnInit {

  gardiens : Array<Joueur>;
  defenseurs : Array<Joueur>;
  milieux : Array<Joueur>;
  attaquants : Array<Joueur>;
  equipe : Equipe = new Equipe();

  currentGardien : Joueur;
  currentDefenseur1 : Joueur;
  currentDefenseur2 : Joueur;
  currentMilieu1 : Joueur;
  currentMilieu2: Joueur;
  currentAttaquant1 : Joueur;
  currentAttaquant2 : Joueur;
  currentEntraineur : Joueur;

  constructor(private serviceEquipeHttp : EquipeHttpService) { 
    this.joueurAll();
    
  }

  ngOnInit(): void {
  }

  joueurAll() {
     this.serviceEquipeHttp.getAllGardien().subscribe( resp => {
      console.log("mes joueurs : ",resp);
      this.gardiens = resp
     });
     this.serviceEquipeHttp.getAllDefenseur().subscribe( resp => {
      console.log("mes joueurs : ",resp);
      this.defenseurs = resp
     });
     this.serviceEquipeHttp.getAllMillieu().subscribe( resp => {
      console.log("mes joueurs : ",resp);
      this.milieux = resp
     });
     this.serviceEquipeHttp.getAllAttaquant().subscribe( resp => {
      console.log("mes joueurs : ",resp);
      this.attaquants = resp
     });
  }
  voir(event : Event) {
    console.log("voila mon event : ",event.target["dataset"].toggle);
    const tabJoueur = document.querySelectorAll(".equipe_joueur") as NodeListOf<HTMLElement> ;
    tabJoueur.forEach( (btn) =>{
      btn.style.width = "0%";
    });
    tabJoueur[event.target["dataset"].toggle].style.width = "100%"
    
  }

}
