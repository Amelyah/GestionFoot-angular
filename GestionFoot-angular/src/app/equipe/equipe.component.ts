import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Attaquant, Defenseur, Entraineur, Equipe, Gardien, Joueur, Milieu } from '../model';
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
  entraineurs : Array<Entraineur>;
  equipe : Equipe ;

  currentCouleurEquipe : string;
  currentClassementEquipe : number;
  currentPaysEquipe : string;
  currentIdGardien : number
  currentIdDefenseur1 : number;
  currentIdDefenseur2 : number;
  currentIdMilieu1 : number;
  currentIdMilieu2: number;
  currentIdAttaquant1 : number;
  currentIdAttaquant2 : number;
  currentIdEntraineur : number;

  cohesion : number = 0;
	jeux : number  = 0 ;
	pressing : number  = 0 ;


  constructor(private serviceEquipeHttp : EquipeHttpService, private router : Router,
    private authService: AuthService) { 
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
     this.serviceEquipeHttp.getAllEntraineur().subscribe( resp => {
      console.log("mes  entraineurs : ",resp);
      this.entraineurs = resp
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

  verificationEquipe() : boolean{
    if( 
    this.currentPaysEquipe &&
    this.currentIdGardien&&
    this.currentIdDefenseur1 &&
    this.currentIdDefenseur2 &&
    this.currentIdMilieu1 &&
    this.currentIdMilieu2&&
    this.currentIdAttaquant1 &&
    this.currentIdAttaquant2 &&
    this.currentIdEntraineur &&
    this.currentClassementEquipe &&
    this.verificationPoint()
    ){
      return true;
    }else{
      return false
    }
    
  }
  verificationPoint(){
    return (this.cohesion + this.jeux + this.pressing)<= 1
  }
  
  creerEquipe(){
    if( this.verificationEquipe() ){
      this.equipe = new Equipe(this.currentPaysEquipe,this.currentCouleurEquipe,this.currentClassementEquipe,undefined,undefined,
        this.cohesion,this.jeux,this.pressing);
      this.serviceEquipeHttp.createEquipeMinimum(this.equipe).subscribe( resp => {
        this.equipe  = resp;
        this.serviceEquipeHttp.addGardienToEquipe(this.equipe["id"],this.currentIdGardien).subscribe( resp =>{
          this.serviceEquipeHttp.addDefenseurToEquipe(this.equipe["id"],this.currentIdDefenseur1).subscribe(  resp =>{
            this.serviceEquipeHttp.addDefenseurToEquipe(this.equipe["id"],this.currentIdDefenseur2).subscribe( resp => {
              this.serviceEquipeHttp.addMilieuToEquipe(this.equipe["id"],this.currentIdMilieu1).subscribe( resp =>{
                this.serviceEquipeHttp.addMilieuToEquipe(this.equipe["id"],this.currentIdMilieu2).subscribe( resp => {
                  this.serviceEquipeHttp.addAttaquantToEquipe(this.equipe["id"],this.currentIdAttaquant1).subscribe( resp => {
                    this.serviceEquipeHttp.addAttaquantToEquipe(this.equipe["id"],this.currentIdAttaquant2).subscribe( resp => {
                      this.serviceEquipeHttp.addEntraineurToEquipe(this.equipe["id"],this.currentIdEntraineur).subscribe( resp => {
                        this.authService.compte.equipe = this.equipe;
                        this.authService.compte.hasEquipe = true ;
                        this.serviceEquipeHttp.updateCompteHasEquipe(this.authService.compte.id,true).subscribe(resp => {
                          console.log("this.authService.compte.id : ",this.authService.compte.id);
                          console.log("equipe créé : ",this.equipe["id"]);
                          this.serviceEquipeHttp.updateCompteWithEquipe(this.authService.compte.id,this.equipe["id"] ).subscribe( resp =>{
                            this.router.navigate(['/menu-principal'])
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });

        });
                
        
        
        
        
        
        
        
        
        
      });

    }
    
  }
  

}
