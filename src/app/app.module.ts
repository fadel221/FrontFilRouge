import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule} from './Modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestInterceptorProvider } from './Services/TokenAddInterceptor';
import { HttpClientModule } from '@angular/common/http';
import { ListeUserComponent } from './components/user/liste-user/liste-user.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { ArchiveUserComponent } from './components/user/archive-user/archive-user.component';
import { AddProfilComponent } from './components/profil/add-profil/add-profil.component';
import { ListProfilComponent } from './components/profil/list-profil/list-profil.component';
import { ListProfilsortieComponent } from './components/profilsortie/list-profilsortie/list-profilsortie.component';
import { AddProfilsortieComponent } from './components/profilsortie/add-profilsortie/add-profilsortie.component';
import { EditProfilsortieComponent } from './components/profilsortie/edit-profilsortie/edit-profilsortie.component';
import { ArchiveProfilsortieComponent } from './components/profilsortie/archive-profilsortie/archive-profilsortie.component';
import { AddCompetenceComponent } from './components/competences/add-competence/add-competence.component';
import { EditCompetenceComponent } from './components/competences/edit-competence/edit-competence.component';
import { ListCompetenceComponent } from './components/competences/list-competence/list-competence.component';
import { ListGrpecompetenceComponent } from './components/grpecompetences/list-grpecompetence/list-grpecompetence.component';
import { AddGrpecompetenceComponent } from './components/grpecompetences/add-grpecompetence/add-grpecompetence.component';
import { EditGrpecompetenceComponent } from './components/grpecompetences/edit-grpecompetence/edit-grpecompetence.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { FormsModule } from '@angular/forms';
import { ListReferentielComponent } from './components/referentiel/list-referentiel/list-referentiel.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailUserComponent } from './components/user/detail-user/detail-user.component';
import { HomeComponent } from './components/home/home.component';
import { AddReferentielComponent } from './components/referentiel/add-referentiel/add-referentiel.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { AddPromoComponent } from './components/promo/add-promo/add-promo.component'; 
import { AuthGuard } from './guard/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListeUserComponent,
    AddUserComponent,
    UpdateUserComponent,
    ArchiveUserComponent,
    AddProfilComponent,
    ListProfilComponent,
    ListProfilsortieComponent,
    AddProfilsortieComponent,
    EditProfilsortieComponent,
    ArchiveProfilsortieComponent,
    AddCompetenceComponent,
    EditCompetenceComponent,
    ListCompetenceComponent,
    ListGrpecompetenceComponent,
    AddGrpecompetenceComponent,
    EditGrpecompetenceComponent,
    MainContainerComponent,
    AuthentificationComponent,
    ListReferentielComponent,
    NotFoundComponent,
    DetailUserComponent,
    HomeComponent,
    AddReferentielComponent,
    AddPromoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, // Pour les controls
    MatSelectModule
  ],
  providers: [RequestInterceptorProvider,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

