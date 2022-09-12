import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model';
import { EquipeHttpService } from './equipe-http.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})

export class EquipeComponent implements OnInit {

  joueurs : Array<Joueur>;

  constructor(private serviceEquipeHttp : EquipeHttpService) { 
    this.joueurAll();
    
  }

  ngOnInit(): void {
  }

  joueurAll() {
     this.serviceEquipeHttp.getAllJoueur().subscribe( resp => {
      console.log("mes joueurs : ",resp);
      this.joueurs = resp
     });
  }

}
