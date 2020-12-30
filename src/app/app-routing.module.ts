import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { AddCompetenceComponent } from './components/competences/add-competence/add-competence.component';
import { ListCompetenceComponent } from './components/competences/list-competence/list-competence.component';
import { AddGrpecompetenceComponent } from './components/grpecompetences/add-grpecompetence/add-grpecompetence.component';
import { ListGrpecompetenceComponent } from './components/grpecompetences/list-grpecompetence/list-grpecompetence.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ListProfilComponent } from './components/profil/list-profil/list-profil.component';
import { ListProfilsortieComponent } from './components/profilsortie/list-profilsortie/list-profilsortie.component';
import { AddPromoComponent } from './components/promo/add-promo/add-promo.component';
import { AddReferentielComponent } from './components/referentiel/add-referentiel/add-referentiel.component';
import { ListReferentielComponent } from './components/referentiel/list-referentiel/list-referentiel.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { ListeUserComponent } from './components/user/liste-user/liste-user.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path:'auth',component:AuthentificationComponent
  },
  {
    path:'',component:AuthentificationComponent
  },
  {
    path:'user' ,component:ListeUserComponent
  },
  {
    path:"user/add",component:AddUserComponent
  },
  {
    path:'profil',component:ListProfilComponent
  },
  {
    path:'profilsorties',component:ListProfilsortieComponent
  },
  {
    path:'promos',component:AddPromoComponent
  },
  {
    path:'referentiels',component:ListReferentielComponent
  },
  {
    path:'referentiels/add',component:AddReferentielComponent
  },
  {
    path:'competences',component:ListCompetenceComponent
  },
  {
    path:'competences/add',component:AddCompetenceComponent
  },
  {
    path:'grpecompetences',component:AddGrpecompetenceComponent
  },
  {
    path:'**',component:NotFoundComponent
  },
  {
    path:"competences/list",component:ListCompetenceComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
