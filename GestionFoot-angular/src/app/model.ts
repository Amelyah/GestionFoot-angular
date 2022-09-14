export class Compte {
    id : number;
    version: number;
    login: string;
    password: string;
    email: string;
    hasEquipe: boolean = false;;

    constructor( login : string, password: string, email?: string, id?: number, version? : number) {
        this.id = id;
        this.version = version;
        this.login = login;
        this.password = password;
        this.email = email;
        this.hasEquipe = false;
    }
}

export class Equipe {
    id : number;
    pays : string ;
    classement : number;
    couleur : string;
    cohesion : number;
    jeux : number;
    pressing : number;

    constructor(pays? : string, couleur? : string, classement? : number, cohesion? : number, jeux? : number, pressing? : number) {
        this.pays = pays;
        this.couleur = couleur;
        this.classement = classement;
        this.cohesion = cohesion;
        this.jeux = jeux;
        this.pressing = pressing;
    }
}
