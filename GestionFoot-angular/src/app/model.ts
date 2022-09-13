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
