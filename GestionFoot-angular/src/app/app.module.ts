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
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
