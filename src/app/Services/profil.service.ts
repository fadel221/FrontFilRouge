import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private Httpclient:HttpClient) { }

  getProfil()
  {
    return this.Httpclient.get("http://localhost:8000/api/admin/profils");
  }

  
}
