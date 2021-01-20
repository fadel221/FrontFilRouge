import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReferentielService {

  constructor(private Httpclient:HttpClient) { }

  getReferentiels()
  {
    return this.Httpclient.get("http://localhost:8000/api/admin/referentiels");
  }

  addReferentiel(data:any)
  {
    return this.Httpclient.post("http://localhost:8000/api/admin/referentiels",data);
  }

  updateReferentiel(data:any)
  {
    return this.Httpclient.put("http://localhost:8000/api/admin/referentiels/"+data.id,data);
  }

  archiveReferentiel(id:any)
  {
    return this.Httpclient.delete("http://localhost:8000/api/admin/referentiels/"+id);
  }

  getReferentielById(id:number,data:any)
  {
    const referentiel: any = data.find(
     (r:any) => {
       return r.id===id;
     } 
    );
      return referentiel;
  }

}
