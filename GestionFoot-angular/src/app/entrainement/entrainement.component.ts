import { Component, OnInit } from '@angular/core';
import { EquipeHttpService } from '../equipe/equipe-http.service';
import { Equipe } from '../model';

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
  
  valueJeux: number = 0;
  valueCohesion: number = 0;
  valuePressing: number = 0;

  point: number = (1-this.cohesionIncr - this.jeuxIncr - this.pressingIncr );

  constructor(private entrainementHttpService : EquipeHttpService){ }

  ngOnInit(): void {
    this.entrainementHttpService.getEquipeById(2).subscribe(resp => {
      this.formEquipe = resp;
      console.log("mon équipe",this.formEquipe);
    });
    
    // if(this.valueJeux == 0 || this.valueCohesion == 0 || this.valuePressing == 0){
    //   document.getElementById("btnDecrement").setAttribute('disabled', 'disabled');
    // }

    // if(this.valueJeux == 1 || this.valueCohesion == 1 || this.valuePressing == 1){
    //   document.getElementById("btnIncrement").setAttribute('disabled', 'disabled');
    // }
  }
  incr(){
      this.point = 1- (this.cohesionIncr + this.jeuxIncr + this.pressingIncr )
  }


}
