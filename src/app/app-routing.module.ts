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
import { ArchiveUserComponent } from './components/user/archive-user/archive-user.component';
import { DetailUserComponent } from './components/user/detail-user/detail-user.component';
import { ListeUserComponent } from './components/user/liste-user/liste-user.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,canActivate:[AuthGuard]
  },
  {
    path:'auth',component:AuthentificationComponent
  },
  {
    path:'',component:AuthentificationComponent
  },
  {
    path:'user' ,children:
    [
        {
          path:'',component:ListeUserComponent,canActivate:[AuthGuard]
        },
        {
          path:"add",component:AddUserComponent,canActivate:[AuthGuard]
        },
        {
          path:'detail/:id',component:DetailUserComponent,canActivate:[AuthGuard]
        },
        {
          path:'update/:id',component:UpdateUserComponent,canActivate:[AuthGuard]
        },
        {
          path:'archive/:id',component:ArchiveUserComponent,canActivate:[AuthGuard]
        }
    ]
},
  {
    path:'profil',component:ListProfilComponent,canActivate:[AuthGuard]
  },
  {
    path:'profilsorties',component:ListProfilsortieComponent,canActivate:[AuthGuard]
  },
  {
    path:'promos',component:AddPromoComponent,canActivate:[AuthGuard]
  },
  {
    path:'referentiels',component:ListReferentielComponent,canActivate:[AuthGuard]
  },
  {
    path:'referentiels/add',component:AddReferentielComponent,canActivate:[AuthGuard]
  },
  {
    path:'competences',component:ListCompetenceComponent,canActivate:[AuthGuard]
  },
  {
    path:'competences/add',component:AddCompetenceComponent,canActivate:[AuthGuard]
  },
  {
    path:'grpecompetences',component:AddGrpecompetenceComponent,canActivate:[AuthGuard]
  },
  {
    path:'**',component:NotFoundComponent,canActivate:[AuthGuard]
  },
  {
    path:"competences/list",component:ListCompetenceComponent,canActivate:[AuthGuard]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
