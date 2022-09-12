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
import { CompteComponent } from './compte/compte.component';
import { EntrainementComponent } from './entrainement/entrainement.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EquipeHttpService } from './equipe/equipe-http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JoueurRaccPipe } from './joueur-racc.pipe';
import { NomRaccPipe } from './nom-racc.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuInscriptionComponent,
    MenuPrincipalComponent,
    EquipeComponent,
    MatchComponent,
    RegleComponent,
    CompteComponent,
    EntrainementComponent,
    DashboardComponent,
    JoueurRaccPipe,
    NomRaccPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [
    
    EquipeHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
