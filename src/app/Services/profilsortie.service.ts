import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilsortieService {

  constructor(private Httpclient:HttpClient) { }

  getProfilSorties()
  {
    return this.Httpclient.get("http://localhost:8000/api/admin/profilsorties?isDeleted=false");
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

  getProfilsortieById(id:number,data:any)
  {
    const profilsortie: any = data.find(
     (p:any) => {
       return p.id===id;
     } 
    );
      return profilsortie;
  }

  
}
