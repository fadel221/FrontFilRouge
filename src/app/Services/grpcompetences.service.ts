import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrpcompetencesService {

  constructor(private _httpClient:HttpClient) { }

  AddGrpeCompetence(data:any)
  {
    return this._httpClient.post("http://localhost:8000/api/admin/groupecompetences",data)
  }
  

  getGrpeCompetence()
  {
    return this._httpClient.get("http://localhost:8000/api/admin/groupecompetences");
  }

  getGrpecompetenceByLibelle(libelle:any,data:any)
  {
    const groupecompetence: any = data.find(
     (g:any) => {
       
       return console.log (g.id ? g.libelle===libelle: null);
     } 
    );
      return groupecompetence;
  }

  getGroupecompetenceOnForm(Groupecompetence:any,data:any)
  {
    var tab:any[]
    for (let x in Groupecompetence) 
      tab.push(this.getGrpecompetenceByLibelle(x,data))
    return tab
  }
}
