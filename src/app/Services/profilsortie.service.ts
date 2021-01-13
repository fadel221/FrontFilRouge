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

  addProfilsortie(data:any)
  {
    return this.Httpclient.post("http://localhost:8000/api/admin/profilsorties",data);
  }

  updateProfilsortie(data:any)
  {
    return this.Httpclient.put("http://localhost:8000/api/admin/profilsorties/"+data.id,data);
  }

  archiveProfilsortie(id:any)
  {
    return this.Httpclient.delete("http://localhost:8000/api/admin/profilsorties/"+id);
  }

  
}
