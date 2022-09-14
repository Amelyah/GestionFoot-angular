import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-regle',
  templateUrl: './regle.component.html',
  styleUrls: ['./regle.component.css']
})
export class RegleComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  auth : AuthService = this.authService;


  ngOnInit(): void {
  }

}
