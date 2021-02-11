import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProfilsortieService {

  constructor(private Httpclient:HttpClient) { }

  getProfilSorties()
  {
    return this.Httpclient.get(environment.url+"admin/profilsorties?isDeleted=false");
  }

  addProfilsortie(data:any)
  {
    return this.Httpclient.post(environment.url+"admin/profilsorties",data);
  }

  updateProfilsortie(data:any)
  {
    return this.Httpclient.put(environment.url+"admin/profilsorties/"+data.id,data);
  }

  archiveProfilsortie(id:any)
  {
    return this.Httpclient.delete(environment.url+"admin/profilsorties/"+id);
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
