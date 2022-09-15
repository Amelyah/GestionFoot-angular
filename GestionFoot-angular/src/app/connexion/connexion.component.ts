import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  login: string;
  password: string;
  loginError: boolean = false;
  
  constructor(private authService: AuthService, private router: Router) { }
  
  ngOnInit(): void {
  }

  seConnecter() {
    
    this.authService.connexion(this.login, this.password).subscribe((resp) => {
      this.authService.compte = resp;
      
      localStorage.setItem('id', this.authService.compte.id.toString());
      localStorage.setItem('login', this.authService.compte.login);
      localStorage.setItem('password', this.authService.compte.password); 
      localStorage.setItem('email', this.authService.compte.email);
      if(this.authService.compte.hasEquipe) 
        localStorage.setItem('hasEquipe', 'true');
      else localStorage.setItem('hasEquipe', 'false');
      if(this.authService.compte.hasEquipe) this.router.navigate(["/menu-principal"]);
      else this.router.navigate(["/menu-inscription"]);
<<<<<<< HEAD
      // console.log(this.authService.compte.equipe["id"]);
=======
      
      console.log(this.authService.compte.equipe.id);

>>>>>>> Amélia
    }, error => {
      if(error.status == "403") {
        this.loginError = true;
      }
    });;
  }

}
