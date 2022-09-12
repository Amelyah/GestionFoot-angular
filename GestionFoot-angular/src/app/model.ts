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
}


export abstract class Joueur extends Personne {
	
	private physique : number;
	
	private technique : number;
	
	private tactique : number;
	
	private mental : number;
	
	// private Equipe equipe : Equipe;
	
	constructor(id? : number, nom? :string,  prenom?:string, naissance?:string ,physique? : number,technique? : number,tactique? : number, mental?: number){
		super(id,nom, prenom, naissance);
		this.physique = physique ;
		this.technique = technique;
		this.tactique = tactique;
		this.mental = mental;
	}


}