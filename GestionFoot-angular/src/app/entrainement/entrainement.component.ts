import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Equipe } from '../model';
import { HttpEntrainementService } from './http-entrainement.service';
=======
import { EquipeHttpService } from '../equipe/equipe-http.service';
import { Equipe } from '../model';
>>>>>>> main

@Component({
  selector: 'app-entrainement',
  templateUrl: './entrainement.component.html',
  styleUrls: ['./entrainement.component.css']
})
export class EntrainementComponent implements OnInit {

  formEquipe: Equipe;
  // this.authService.equipe...
<<<<<<< HEAD

=======
  cohesionIncr : number = 0;
  jeuxIncr : number = 0;
  pressingIncr : number = 0;
>>>>>>> main
  
  valueJeux: number = 0;
  valueCohesion: number = 0;
  valuePressing: number = 0;

<<<<<<< HEAD
  point: number = 1;

  constructor(private entrainementHttpService : HttpEntrainementService){ }

  ngOnInit(): void {
    this.entrainementHttpService.findById(1).subscribe(resp => {
      this.formEquipe = resp;
    });

    if(this.valueJeux == 0){
      document.getElementById("btnDecrement1").setAttribute('disabled', 'disabled');
    }
    if(this.valueCohesion == 0){
      document.getElementById("btnDecrement2").setAttribute('disabled', 'disabled');
    }
    if(this.valuePressing == 0){
      document.getElementById("btnDecrement3").setAttribute('disabled', 'disabled');
    }
  }



  increment1() {
    this.valueJeux = this.valueJeux + 0.1;
    this.point = this.point - 0.1;
    if(this.valueJeux == 1){
      document.getElementById("btnIncrement1").setAttribute('disabled', 'disabled');
    }else document.getElementById("btnDecrement1").removeAttribute('disabled');

  }

  decrement1() {
    this.valueJeux = this.valueJeux - 0.1;
    this.point = this.point + 0.1;
    if(this.valueJeux == 0){
      document.getElementById("btnDecrement1").setAttribute('disabled', 'disabled');
    }else document.getElementById("btnIncrement1").removeAttribute('disabled');
  }

  increment2() {
    this.valueCohesion = this.valueCohesion + 0.1;
    this.point = this.point - 0.1;
    if(this.valueCohesion == 1){
      document.getElementById("btnIncrement2").setAttribute('disabled', 'disabled');
    }else document.getElementById("btnDecrement2").removeAttribute('disabled');
  }

  decrement2() {
    this.valueCohesion = this.valueCohesion - 0.1;
    this.point = this.point + 0.1;
    if(this.valueCohesion == 0){
      document.getElementById("btnDecrement2").setAttribute('disabled', 'disabled');
    }else document.getElementById("btnIncrement2").removeAttribute('disabled');
=======
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
>>>>>>> main
  }
  incr(){
      this.point = 1- (this.cohesionIncr + this.jeuxIncr + this.pressingIncr )
  }


  increment3() {
    this.valuePressing = this.valuePressing + 0.1;
    this.point = this.point - 0.1;
    if(this.valuePressing == 1){
      document.getElementById("btnIncrement3").setAttribute('disabled', 'disabled');
    }else document.getElementById("btnDecrement3").removeAttribute('disabled');
  }

  decrement3() {
    this.valuePressing = this.valuePressing - 0.1;
    this.point = this.point + 0.1;
    if(this.valuePressing == 0){
      document.getElementById("btnDecrement3").setAttribute('disabled', 'disabled');
    }else document.getElementById("btnIncrement3").removeAttribute('disabled');
  }

  entrainerEquipe(){
    this.entrainementHttpService.entrainer(this.valueJeux,this.valueCohesion,this.valuePressing);
  }
}