import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {

  constructor(private _httpClient:HttpClient) { }

  AddCompetence(data:any)
  {
    return this._httpClient.post("http://localhost:8000/api/admin/competences",data)
  }
}
