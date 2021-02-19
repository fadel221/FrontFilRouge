import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { ArchiveUserComponent } from './components/user/archive-user/archive-user.component';
import { ListeProfilsortiesComponent } from './components/profilsorties/liste-profilsorties/liste-profilsorties.component';
import { AddProfilsortiesComponent } from './components/profilsorties/add-profilsorties/add-profilsorties.component';
import { UpdateProfilsortiesComponent } from './components/profilsorties/update-profilsorties/update-profilsorties.component';
import { ArchiveProfilsortiesComponent } from './components/profilsorties/archive-profilsorties/archive-profilsorties.component';
import { AddProfilComponent } from './components/profils/add-profil/add-profil.component';
import { UpdateProfilComponent } from './components/profils/update-profil/update-profil.component';
import { ArchiveProfilComponent } from './components/profils/archive-profil/archive-profil.component';
import { AddReferentielComponent } from './components/referentiels/add-referentiel/add-referentiel.component';
import { UpdateReferentielComponent } from './components/referentiels/update-referentiel/update-referentiel.component';
import { ArchiveReferentielComponent } from './components/referentiels/archive-referentiel/archive-referentiel.component';
import { ListeReferentielsComponent } from './components/referentiels/liste-referentiels/liste-referentiels.component';
import { ListeCompetencesComponent } from './components/competences/liste-competences/liste-competences.component';
import { UpdateCompetenceComponent } from './components/competences/update-competence/update-competence.component';
import { AddCompetenceComponent } from './components/competences/add-competence/add-competence.component';
import { ArchiveCompetenceComponent } from './components/competences/archive-competence/archive-competence.component';
import { ArchiveGrpecompetenceComponent } from './components/groupecompetences/archive-grpecompetence/archive-grpecompetence.component';
import { UpdateGrpecompetenceComponent } from './components/groupecompetences/update-grpecompetence/update-grpecompetence.component';
import { AddGrpecompetenceComponent } from './components/groupecompetences/add-grpecompetence/add-grpecompetence.component';
import { ListeGrpecompetenceComponent } from './components/groupecompetences/liste-grpecompetence/liste-grpecompetence.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ListeProfilsComponent } from './components/profils/liste-profils/liste-profils.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ListePromoComponent } from './components/liste-promo/liste-promo.component';
import { UpdatePromoComponent } from './components/update-promo/update-promo.component';
import { CreatePromoComponent } from './components/create-promo/create-promo.component';
import { ArchivePromoComponent } from './components/archive-promo/archive-promo.component';
import { ErrorComponent } from './components/error/error.component'; 
import { HttpClientModule } from '@angular/common/http';
import { RequestInterceptorProvider } from './Interceptors/token-add-interceptor.interceptor';
import { DetailReferentielComponent } from './components/referentiels/detail-referentiel/detail-referentiel.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DetailsGroupecompetencesComponent } from './components/groupecompetences/details-groupecompetences/details-groupecompetences.component';
import { DetailsUserComponent } from './components/user/details-user/details-user.component';
import { DetailsProfilComponent } from './components/profils/details-profil/details-profil.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FilterSearchPipe } from './pipes/filter-search.pipe';
import { DropExistPipe } from './pipes/drop-exist.pipe';
import { FilterByRecentPipe } from './pipes/filter-by-recent.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AuthentificationComponent,
    AddUserComponent,
    ListUserComponent,
    EditUserComponent,
    ArchiveUserComponent,
    ListeProfilsortiesComponent,
    AddProfilsortiesComponent,
    UpdateProfilsortiesComponent,
    ArchiveProfilsortiesComponent,
    AddProfilComponent,
    UpdateProfilComponent,
    ArchiveProfilComponent,
    AddReferentielComponent,
    UpdateReferentielComponent,
    ArchiveReferentielComponent,
    ListeReferentielsComponent,
    ListeCompetencesComponent,
    UpdateCompetenceComponent,
    AddCompetenceComponent,
    ArchiveCompetenceComponent,
    ArchiveGrpecompetenceComponent,
    UpdateGrpecompetenceComponent,
    AddGrpecompetenceComponent,
    ListeGrpecompetenceComponent,
    ListeProfilsComponent,
    ListePromoComponent,
    UpdatePromoComponent,
    CreatePromoComponent,
    ArchivePromoComponent,
    ErrorComponent,
    DetailReferentielComponent,
    DetailsGroupecompetencesComponent,
    DetailsUserComponent,
    DetailsProfilComponent,
    FilterSearchPipe,
    DropExistPipe,
    FilterByRecentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    MatSelectModule,
    MatButtonToggleModule,
    HttpClientModule,
    PdfViewerModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [RequestInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

