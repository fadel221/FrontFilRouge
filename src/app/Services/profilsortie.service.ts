import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilsortieService {

  constructor(private Httpclient:HttpClient) { }

  getProfilSorties()
  {
    return this.Httpclient.get("http://localhost:8000/api/admin/profilsorties");
  }

  
}
