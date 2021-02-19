import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GrpcompetencesService {

  constructor(private _httpClient:HttpClient) { }

  AddGrpeCompetence(data:any)
  {
    return this._httpClient.post(environment.url+"admin/groupecompetences",data)
  }
  

  getGrpeCompetence()
  {
    return this._httpClient.get(environment.url+"admin/groupecompetences?isDeleted=false");
  }

  getGrpecompetenceByLibelle(libelle:any,data:any)
  {
    const groupecompetence: any = data.find(
     (g:any) => {
       
       return g.libelle===libelle;
     } 
    );
      return groupecompetence;
  }

  getGrpecompetenceById(id:any,data:any)
  {
    const groupecompetence: any = data.find(
     (g:any) => {
       
       return g.id===id;
     } 
    );
      return groupecompetence;
  }

  updateGroupecompetence(data:any,id:any)
  {
    return this._httpClient.put(environment.url+"admin/groupecompetences/"+id+"?isDeleted=false",data);
  }

  archiveGrpecompetence(id:any)
  {
    return this._httpClient.delete(environment.url+"admin/groupecompetences/"+id)
  }

  getGroupecompetenceOnForm(Groupecompetence:any,data:any)
  {
    var tab:any[]
    for (let x in Groupecompetence) 
      tab.push(this.getGrpecompetenceByLibelle(x,data))
    return tab
  }
}
