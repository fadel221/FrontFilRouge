import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private Httpclient:HttpClient) { }

  getProfil()
  {
    return this.Httpclient.get(environment.url+"admin/profils");
  }

  
}
