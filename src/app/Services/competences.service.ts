import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {

  constructor(private _httpClient:HttpClient) { }

  getCompetences()
  {
    return this._httpClient.get(environment.url+'admin/competences');
  }

  AddCompetence(data:any)
  {
    return this._httpClient.post(environment.url+"admin/competences",data)
  }

  getCompetenceByLibelle(libelle:any,data:any)
  {
    const competence: any = data.find(
     (g:any) => {
       
       return g.libelle===libelle;
     } 
    );
      return competence;
  }

  
}
