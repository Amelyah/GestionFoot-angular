import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntrainementComponent } from './entrainement/entrainement.component';
import { EquipeComponent } from './equipe/equipe.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MatchComponent } from './match/match.component';
import { MenuInscriptionComponent } from './menu-inscription/menu-inscription.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { RegleComponent } from './regle/regle.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"menu-inscription", component: MenuInscriptionComponent},
  {path:"menu-principal", component: MenuPrincipalComponent},
  {path:"equipe", component: EquipeComponent},
  {path:"dashboard", component: DashboardComponent},
  {path:"match", component: MatchComponent},
  {path:"regles", component: RegleComponent},
  {path:"mon-compte", component: CompteComponent},
  {path:"entrainement", component: EntrainementComponent},
  {path:"connexion", component: ConnexionComponent},
  {path:"inscription", component: InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
