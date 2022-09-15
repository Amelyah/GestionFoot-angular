import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model';
import { HttpEntrainementService } from './http-entrainement.service';
import { EquipeHttpService } from '../equipe/equipe-http.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-entrainement',
  templateUrl: './entrainement.component.html',
  styleUrls: ['./entrainement.component.css']
})
export class EntrainementComponent implements OnInit {

  formEquipe: Equipe;
  // this.authService.equipe...

  cohesionIncr : number = 0;
  jeuxIncr : number = 0;
  pressingIncr : number = 0;
  idEquipeCourant : number = 0;

  point: number = (1-this.cohesionIncr - this.jeuxIncr - this.pressingIncr );
 
  constructor(private entrainementHttpService : EquipeHttpService,
    private authService : AuthService){ 
      this.idEquipeCourant = this.authService.compte.equipe["id"];
    }


  ngOnInit(): void {
    this.entrainementHttpService.getEquipeById(2).subscribe(resp => {
      this.formEquipe = resp;
      console.log("mon équipe",this.formEquipe);
    });
  }

  incr(){
      this.point =  Number((1 - (this.cohesionIncr + this.jeuxIncr + this.pressingIncr)).toFixed(1));
  }

  // entrainerEquipe(){
  //   this.entrainementHttpService.entrainer(this.valueJeux,this.valueCohesion,this.valuePressing);
  // }
}