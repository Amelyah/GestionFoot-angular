import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuInscriptionComponent } from './menu-inscription/menu-inscription.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { EquipeComponent } from './equipe/equipe.component';
import { MatchComponent } from './match/match.component';
import { RegleComponent } from './regle/regle.component';
import { EntrainementComponent } from './entrainement/entrainement.component';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AuthService } from './auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UtilisateurHttpService } from './utilisateur-http.service';
import { APIInterceptor } from './api.interceptor';
import { CompteHttpService } from './compte/compte-http.service';
import { CompteComponent } from './compte/compte.component';
import { HttpEntrainementService } from './entrainement/http-entrainement.service';
=======
import { EquipeHttpService } from './equipe/equipe-http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JoueurRaccPipe } from './joueur-racc.pipe';
import { NomRaccPipe } from './nom-racc.pipe';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
>>>>>>> main

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuInscriptionComponent,
    MenuPrincipalComponent,
    EquipeComponent,
    MatchComponent,
    RegleComponent,
    EntrainementComponent,
    DashboardComponent,
<<<<<<< HEAD
    FooterComponent,
    ConnexionComponent,
    InscriptionComponent,
    CompteComponent
=======
    JoueurRaccPipe,
    NomRaccPipe,
    RecapitulatifComponent
>>>>>>> main
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,UtilisateurHttpService,CompteHttpService,HttpEntrainementService,
    {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true } ],
=======
    FormsModule, 
    HttpClientModule
  ],
  providers: [
    
    EquipeHttpService
  ],
>>>>>>> main
  bootstrap: [AppComponent]
})
export class AppModule { }
