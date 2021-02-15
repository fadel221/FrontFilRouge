import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { ListeCompetencesComponent } from './components/competences/liste-competences/liste-competences.component';
import { DetailsProfilComponent } from './components/profils/details-profil/details-profil.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailsGroupecompetencesComponent } from './components/groupecompetences/details-groupecompetences/details-groupecompetences.component';
import { ListeGrpecompetenceComponent } from './components/groupecompetences/liste-grpecompetence/liste-grpecompetence.component';
import { ListePromoComponent } from './components/liste-promo/liste-promo.component';
import { ListeProfilsComponent } from './components/profils/liste-profils/liste-profils.component';
import { AddProfilsortiesComponent } from './components/profilsorties/add-profilsorties/add-profilsorties.component';
import { ListeProfilsortiesComponent } from './components/profilsorties/liste-profilsorties/liste-profilsorties.component';
import { AddReferentielComponent } from './components/referentiels/add-referentiel/add-referentiel.component';
import { DetailReferentielComponent } from './components/referentiels/detail-referentiel/detail-referentiel.component';
import { ListeReferentielsComponent } from './components/referentiels/liste-referentiels/liste-referentiels.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { DetailsUserComponent } from './components/user/details-user/details-user.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { AddCompetenceComponent } from './components/competences/add-competence/add-competence.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';

const routes: Routes = [
  {
    path:'',component:AuthentificationComponent
  },
  
  {
    path:'auth',component:AuthentificationComponent
  },
  
  {
    path:'home',children:[

      {
        path:'',  component:SidebarComponent,canActivate:[AuthGuard]
      },
      {
        path:'users',children:
        [
          {
            path:"",component:ListUserComponent,canActivate:[AuthGuard]
          },
          {
            path:"add",component:AddUserComponent
          },
          {
            path:"details/:id",component:DetailsUserComponent,canActivate:[AuthGuard]
          },
          {
            path:"update/:id",component:EditUserComponent,canActivate:[AuthGuard]
          },
        ]
      },
      {
        path:'profilsorties',children:
        [
          {
            path:"",component:ListeProfilsortiesComponent,canActivate:[AuthGuard]
          },
          {
            path:'add', component:AddProfilsortiesComponent,canActivate:[AuthGuard]
          }
          
        ]

      },
      {
        path:'profils',canActivate:[AuthGuard],children:[
          {
            path:'',component:ListeProfilsComponent
          },
          {
            path:'details/:profil',component:DetailsProfilComponent,canActivate:[AuthGuard]
          }
        ]
      },
      {
        path:'referentiels',children:
        [
          {
            path:"",component:ListeReferentielsComponent,canActivate:[AuthGuard]
          },
          {
            path:'detail/:id',component:DetailReferentielComponent,canActivate:[AuthGuard]
          },
          {
            path:'add',component:AddReferentielComponent
          }
        ]
      },
      {
        path:'groupecompetences',children:
        [
          {
            path:'',component:ListeGrpecompetenceComponent,canActivate:[AuthGuard]
          },
          {
            path:'details/:id',component:DetailsGroupecompetencesComponent,canActivate:[AuthGuard]
          },

        ]
      },
      {
        path:'competences',canActivate:[AuthGuard],children:
        [
          {
            path:"",component:ListeCompetencesComponent,canActivate:[AuthGuard]
          },
          {
            path:'add', component:AddCompetenceComponent,canActivate:[AuthGuard]
          }
          
        ]
      },
      {
        path:'promos',component:ListePromoComponent,canActivate:[AuthGuard]
      }
    ]
  },
  {
    path:"**",component:ErrorComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
