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
      if(this.authService.compte.hasEquipe) this.router.navigate(["/menu-principal"]);
      else this.router.navigate(["/menu-inscription"]);
    }, error => {
      if(error.status == "403") {
        this.loginError = true;
      }
    });;
  }

}
