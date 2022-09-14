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



  jouerMatch(strategy : string){
    switch(strategy){
      case "attaquant":
        //this.matchService.lancerStrategieAttaquant();
        break;
      case "milieu":
        //this.matchService.lancerStrategieMilieu();
        break;
      case "defenseur":
        //this.matchService.lancerStrategieDefenseur();
        break;
      default:
        break;
    }
  }

}

