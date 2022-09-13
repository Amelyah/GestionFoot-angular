import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  login: string;
  password: string;
  email: string;
  loginError: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  sInscrire() {
    this.authService.inscription(this.login, this.password, this.email).subscribe((resp) => {
      this.authService.compte = resp;
      this.router.navigate(["/home"]);
    }, error => {
      if(error.status == "403") {
        this.loginError = true;
      }
    });;
  }

}
