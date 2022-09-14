export abstract class Personne {
    private id : number;
	private  nom : string;
	private  prenom :string;
    private naissance : string;

    constructor(id?: number, nom?: string, prenom? : string, naissance?: string) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.naissance = naissance;
    }

    getNom() : string {
        return this.nom;
    }
    getPrenom() : string {
        return this.prenom;
    }
    getId() : number|undefined {
        if(this.id ){
            return this.id;
        } else {
            return undefined;
        }
        
    }
    
}

export class Equipe {
	
	private id : number;
	private pays : string ;
	private  classement : number;
	private listJoueur : Array<Joueur>  ;
	private entraineur : Entraineur;
	private couleur : string;
	private dom : Array<Match>;
	private ext : Array<Match>;
	private cohesion : number;
	private jeux : number;
	private pressing : number;
	
	
	
	constructor(pays? : string, couleur? : string, classement? : number, 
            listJoueur? : Array<Joueur>,
			 entraineur? : Entraineur,
			 cohesion? : number,
			 jeux? : number,
			 pressing? : number) {
		this.pays = pays;
		this.couleur = couleur;
		this.classement = classement;
		this.listJoueur = listJoueur;
		this.entraineur = entraineur;
		this.cohesion = cohesion;
		this.jeux = jeux;
		this.pressing = pressing;
	}
}

export abstract class Joueur extends Personne {
	
	private physique : number;
	private technique : number;
	private tactique : number;
	private mental : number;
	private equipe : Equipe;
	
	constructor(id? : number, nom? :string,  prenom?:string, naissance?:string ,physique? : number,technique? : number,tactique? : number, mental?: number){
		super(id,nom, prenom, naissance);
		this.physique = physique ;
		this.technique = technique;
		this.tactique = tactique;
		this.mental = mental;
	}


}

export class Entraineur extends Personne {
	
	private pedagogie : number;
	private experience : number;
	private ecoute : number;
	private maitriseTechnique : number;
	private maitriseTactique : number;
    private  equipe : Equipe ;
	
	constructor(id? : number, nom? :string,  prenom?:string, naissance?:string ,
        pedagogie?: number, experience?: number, ecoute?: number, maitriseTechnique?: number,
        maitriseTactique?: number){
        super(id,nom, prenom, naissance);
        this.pedagogie = pedagogie ;
        this.experience = experience ;
		this.ecoute = ecoute;
		this.maitriseTechnique = maitriseTechnique;
		this.maitriseTactique = maitriseTactique;

    }


}

export class Match {
	
	private id : number;
	private arbitre : Arbitre;
	private equipeDom : Equipe;
	private equipeExt : Equipe;
	private stade : Stade;
	private scoreDom : number;
	private scoreExt : number ;
	private  fini : boolean = false;
	
	
	constructor(arbitre? : Arbitre,equipeDom? : Equipe,equipeExt? : Equipe, stade?: Stade) {

		this.arbitre = arbitre;
		this.equipeDom = equipeDom;
		this.equipeExt = equipeExt;
		this.stade = stade;
	}

}

export class Arbitre extends Personne {

    private impartialite : number;
	private listeMatchArbitres : Array<Match>;
	constructor(id?: number, nom? : string, prenom?: string, naissance? : string,impartialite? : number){
		super(id,nom,prenom,naissance);
		this.impartialite = impartialite;
	}
}

export class Stade {	

	private id : number;
	private  nom : string;
	private  capacite : number;
	private  adresse : Adresse;
	private ambiance : number;
	private  pays :  string;

	constructor( nom? : string,  capacite?: number,  adresse? : Adresse,  ambiance? : number,  pays? : string) {
		this.nom = nom;
		this.capacite = capacite;
		this.adresse = adresse;
		this.ambiance = ambiance;
		this.pays = pays;
	}

}


export class Adresse {	
	
	private numVoie : string;
	private nomVoie : string;
	private cp : string;
	private ville : string;

	constructor(numVoie : string, nomVoie : string, cp : string, ville: string) {
		this.numVoie = numVoie;
		this.nomVoie = nomVoie;
		this.cp = cp;
		this.ville = ville;
	}
}
export class Gardien extends Joueur {	
	
    private tauxArret : number;
    private tauxJeuPied : number;

	constructor(id? : number, nom? :string,  prenom?:string, naissance?:string
        ,physique? : number,technique? : number,tactique? : number, mental?: number,
        tauxArret? : number, tauxJeuPied?: number){
		super(id,nom, prenom, naissance,
		physique ,
		technique,
		tactique,
		mental)
        this.tauxArret =  tauxArret;
        this.tauxJeuPied = tauxJeuPied;
	}
    getTheId(){
        return this.getId();
    }
}

export class Defenseur extends Joueur {	
	
	private tauxInterception : number;
	
	private capaciteRelance : number;

	constructor(id? : number,nom?: string,  prenom?:string, naissance?:string
        ,physique? : number,technique? : number,tactique? : number, mental?: number,
        tauxInterception? : number, capaciteRelance?: number){
		super(id,nom, prenom, naissance,
		physique ,
		technique,
		tactique,
		mental)
        this.tauxInterception =  tauxInterception;
        this.capaciteRelance = capaciteRelance;
	}
    getTheId(){
        return this.getId();
    }
    chaine(): string {
        return this.getId()+this.getNom()
    }
}

export class Milieu extends Joueur {	

	private tauxEspace : number;
	
	private tauxTransmissionAttaquant : number;

	constructor(id? : number, nom? :string,  prenom?:string, naissance?:string
        ,physique? : number,technique? : number,tactique? : number, mental?: number,
        tauxEspace? : number, tauxTransmissionAttaquant?: number){
		super(id,nom, prenom, naissance,
		physique ,
		technique,
		tactique,
		mental)
        this.tauxEspace =  tauxEspace;
        this.tauxTransmissionAttaquant = tauxTransmissionAttaquant;
	}
}


export class Attaquant extends Joueur {	
	
    private tauxAssist : number;
    private tauxBut : number;

	constructor(id? : number, nom? :string,  prenom?:string, naissance?:string
        ,physique? : number,technique? : number,tactique? : number, mental?: number,
        tauxAssist? : number, tauxBut?: number){
		super(id,nom, prenom, naissance,
		physique ,
		technique,
		tactique,
		mental)
        this.tauxAssist =  tauxAssist;
        this.tauxBut = tauxBut;
	}
}

