import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipeHttpService } from '../equipe/equipe-http.service';
import { Arbitre, Attaquant, Defenseur, Entraineur, Equipe, Gardien, Joueur, Milieu } from '../model';

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
  idEntraineur : Array<number> = new Array<number>();
  idArbitre : Array<number> = new Array<number>();


  //constructor(){}
  //constructor(private matchService: MatchHttpService) { }

  idAdversaireGardien : number;
  idAdversaireDefenseur1 : number;
  idAdversaireDefenseur2 : number;
  idAdversaireMilieu1 : number;
  idAdversaireMilieu2 : number;
  idAdversaireAttaquant1 : number;
  idAdversaireAttaquant2 : number;
  idAdversaireEntraineur : number;
  idArbitreChoisi : number;
  tabStrategie : Array<string> = ['Attaque','Defense','Milieu'];
  stategieAdverse : string;
  strategieUser : string;
  
  arbitre : Arbitre;
  adversaireGardien : Gardien;
  adversaireDefenseur1 : Defenseur;
  adversaireDefenseur2 : Defenseur;
  adversaireMilieu1 : Milieu;
  adversaireMilieu2 : Milieu;
  adversaireAttaquant1 : Attaquant;
  adversaireAttaquant2 : Attaquant;
  adversaireEntraineur : Entraineur;
  adversaireCohesion : number = 0.3;
	adversaireJeux : number = 0.3;
	adversairePressing : number = 0.3;
  adversairePays : string = "Belgique";
 
  equipeAdverse : Equipe;



 
  constructor(private equipeHttp : EquipeHttpService,private router: Router) { 
    this.modelEquipe();
    const id = this.randomize([0,1,2]).pop();
    this.stategieAdverse = this.tabStrategie[id];
     
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
  modelEquipe() {

    this.equipeHttp.getAllGardien().subscribe( resp => {
      for (const gard of resp) {
        this.idGardien.push(gard["id"]);
      }
      this.idGardien = this.randomize(this.idGardien);
      this.idAdversaireGardien = this.idGardien.pop();
      this.equipeHttp.getGardienById(this.idAdversaireGardien).subscribe( resp => {
        this.adversaireGardien = resp;
        console.log(" aléatoir Gardien : ",this.adversaireGardien);
      }

      )
      // console.log("id choisi gardien : ",this.idAdversaireGardien);
      this.equipeHttp.getAllDefenseur().subscribe( resp => {
        for (const gard of resp) {
          this.idDefenseur.push(gard["id"]);
        }
        this.idDefenseur = this.randomize(this.idDefenseur);
        this.idAdversaireDefenseur1 = this.idDefenseur.pop();
        this.idAdversaireDefenseur2 = this.idDefenseur.pop();
        this.equipeHttp.getDefenseurnById(this.idAdversaireDefenseur1).subscribe( resp => {
          this.adversaireDefenseur1 = resp;
        })
        this.equipeHttp.getDefenseurnById(this.idAdversaireDefenseur2).subscribe( resp => {
          this.adversaireDefenseur2 = resp;
        })
        // console.log("id choisi defenseur : ",this.idAdversaireDefenseur1,this.idAdversaireDefenseur2);
        this.equipeHttp.getAllMillieu().subscribe( resp => {
          for (const gard of resp) {
            this.idMilieu.push(gard["id"]);
          }
          this.idMilieu = this.randomize(this.idMilieu);
          this.idAdversaireMilieu1 = this.idMilieu.pop();
          this.idAdversaireMilieu2 = this.idMilieu.pop();
          this.equipeHttp.getMilieuById(this.idAdversaireMilieu1).subscribe( resp => {
            this.adversaireMilieu1 = resp;
          })
          this.equipeHttp.getMilieuById(this.idAdversaireMilieu2).subscribe( resp => {
            this.adversaireMilieu2 = resp;
          })
          // console.log("id choisi milieu : ",this.idAdversaireMilieu1,this.idAdversaireMilieu2);
          this.equipeHttp.getAllAttaquant().subscribe( resp => {
            for (const gard of resp) {
              this.idAttaquant.push(gard["id"]);
            }
            this.idAttaquant = this.randomize(this.idAttaquant);
            this.idAdversaireAttaquant1 = this.idAttaquant.pop();
            this.idAdversaireAttaquant2 = this.idAttaquant.pop();
            this.equipeHttp.getAttaquantById(this.idAdversaireAttaquant1).subscribe( resp => {
              this.adversaireAttaquant1 = resp;
            })
            this.equipeHttp.getAttaquantById(this.idAdversaireAttaquant2).subscribe( resp => {
              this.adversaireAttaquant2 = resp;
            })
            // console.log("id choisi Attaquant : ",this.idAdversaireAttaquant1,this.idAdversaireAttaquant2);
            this.equipeHttp.getAllEntraineur().subscribe( resp => {
              for (const gard of resp) {
                this.idEntraineur.push(gard["id"]);
              }
              this.idEntraineur = this.randomize(this.idEntraineur);
              this.idAdversaireEntraineur = this.idEntraineur.pop();
              this.equipeHttp.getEntraineurById(this.idAdversaireEntraineur).subscribe( resp => {
                this.adversaireEntraineur = resp;
                this.equipeHttp.getAllArbitre().subscribe( resp => {
                  for (const gard of resp) {
                    this.idArbitre.push(gard["id"]);
                  }
                  this.idArbitre = this.randomize(this.idArbitre);
                  this.idArbitreChoisi = this.idArbitre.pop();
                  this.equipeHttp.getArbitreById(this.idArbitreChoisi).subscribe( resp => {
                    console.log("mon arbitre est  !!",resp)
                    this.arbitre = resp

                  })
                  this.CreationMatch();
                })
                
                
                
                
                
              })
              
              // console.log("id choisi Entraineur : ",this.idAdversaireEntraineur);
              
            });
          });
        });
      });
    });
    
    
    
    
    
  }
  creationEquipeByJoueur(tabJoueur : Array<Joueur>, entraineur : Entraineur){
    this.equipeAdverse = new Equipe(this.adversairePays,"red",5,undefined,undefined,
      this.adversaireCohesion,this.adversaireJeux,this.adversairePressing);
      this.equipeHttp.createEquipeMinimum(this.equipeAdverse).subscribe( resp => {
        this.equipeAdverse  = resp;
        this.equipeHttp.addGardienToEquipe(this.equipeAdverse["id"],this.idAdversaireGardien).subscribe();
        
      });

  }

  CreationMatch(){
    
    console.log('les données sont prêtes');
    console.log("l'id du Gardien est dd ",this.adversaireGardien["id"]);

    this.equipeAdverse = new Equipe("Belgique","red",11,undefined,undefined,
    this.adversaireCohesion,this.adversaireJeux,this.adversairePressing);
    this.equipeHttp.createEquipeMinimum(this.equipeAdverse).subscribe( resp => {
    this.equipeAdverse  = resp;
    this.equipeHttp.addGardienToEquipe(this.equipeAdverse["id"],this.adversaireGardien["id"]).subscribe( resp => {
      this.equipeHttp.addDefenseurToEquipe(this.equipeAdverse["id"],this.adversaireDefenseur1["id"]).subscribe( resp =>{
        this.equipeHttp.addDefenseurToEquipe(this.equipeAdverse["id"],this.adversaireDefenseur2["id"]).subscribe( resp =>{
          this.equipeHttp.addMilieuToEquipe(this.equipeAdverse["id"],this.adversaireMilieu1["id"]).subscribe( resp => {
            this.equipeHttp.addMilieuToEquipe(this.equipeAdverse["id"],this.adversaireMilieu2["id"]).subscribe( resp =>{
              this.equipeHttp.addMilieuToEquipe(this.equipeAdverse["id"],this.adversaireMilieu2["id"]).subscribe( resp => {
                this.equipeHttp.addAttaquantToEquipe(this.equipeAdverse["id"],this.adversaireAttaquant1["id"]).subscribe( resp => {
                  this.equipeHttp.addAttaquantToEquipe(this.equipeAdverse["id"],this.adversaireAttaquant2["id"]).subscribe( resp => {
                    this.equipeHttp.addEntraineurToEquipe(this.equipeAdverse["id"],this.adversaireEntraineur["id"]).subscribe( resp => {
                      
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
  directionRecap(){
    this.equipeHttp.createMatchMinimum().subscribe( resp => {
      
      this.router.navigate(['/recapitulatif'],{queryParams:{"idMatch":resp["id"],"idEquipeCourante":2,"idEquipeAdverse":this.equipeAdverse["id"],"idArbitre":this.arbitre["id"],"strategieUser":this.strategieUser,"strategieAdverse":this.stategieAdverse}});

    })
        //http://localhost:4200/recap?idEquipeCourant=2&idEquipeAdverse=45&idArbitre&stratEquipeCourant=%27Attaque%27&stratEquipeAdverse=%27defense%27
  }



  jouerMatch(strategie : string){
    switch(strategie){
      case "attaquant":
        //this.matchService.lancerStrategieAttaquant();
        /*
        Dans le service Match :
        this.http.get<Equipe>(this.apiPath+id).subscribe(response => {
          this.equipe = response;
        });
        
        this.http.get<Equipe>(this.apiPath+"attaquant").subscribe(response => {
          this.attaquants = response;
        });

        this.http.get<Equipe>(this.apiPath+"gardien").subscribe(response => {
          this.gardien = response;
        });

        pour tous les attaquants du tab attaquants faire
          somme += attaquant.getStats
        fin pour

        somme += gardien.getStats

        traitement de la somme selon un calcul défini

        --> Pareil pour équipe adverse
      
        */
        break;
      case "milieu":
        //this.matchService.lancerStrategieMilieu();
        // même déroulé que strat attaquant
        break;
      case "defenseur":
        //this.matchService.lancerStrategieDefenseur();
        // même déroulé que strat attaquant
        break;
      default:
        break;
    }

    /*
      comparaison de la somme entre équipe joueur et équipe adverse

      if(sommeJoueur > sommeAdverse){
        scoreJoueur++;
        gagnant = equipeJoueur;
      }else{
        scoreAdverse++;
        gagnant = equipeAdverse;
      }
    
    */
  }

  // Redirection vers page récapitulatif

}