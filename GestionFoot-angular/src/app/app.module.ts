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
import { FooterComponent } from './footer/footer.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AuthService } from './auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UtilisateurHttpService } from './utilisateur-http.service';
import { APIInterceptor } from './api.interceptor';
import { CompteHttpService } from './compte/compte-http.service';
import { CompteComponent } from './compte/compte.component';
import { HttpEntrainementService } from './entrainement/http-entrainement.service';
import { EquipeHttpService } from './equipe/equipe-http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JoueurRaccPipe } from './joueur-racc.pipe';
import { NomRaccPipe } from './nom-racc.pipe';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { RecapService } from './recapitulatif/recap.service';

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
    FooterComponent,
    ConnexionComponent,
    InscriptionComponent,
    CompteComponent,
    JoueurRaccPipe,
    NomRaccPipe,
    RecapitulatifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,UtilisateurHttpService,CompteHttpService,HttpEntrainementService,
    EquipeHttpService,RecapService,
    {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true } ,
    FormsModule, 
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
