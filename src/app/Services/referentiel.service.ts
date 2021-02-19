import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ReferentielService {

  constructor(private Httpclient:HttpClient) { }

  getReferentiels()
  {
    return this.Httpclient.get(environment.url+"admin/referentiels?isDeleted=false");
  }

  addReferentiel(data:any)
  {
    return this.Httpclient.post(environment.url+"admin/referentiels",data);
  }

  updateReferentiel(data:any,id:any)
  {
    return this.Httpclient.post(environment.url+"admin/referentiels/"+id,data);
  }

  archiveReferentiel(id:any)
  {
    return this.Httpclient.delete(environment.url+"admin/referentiels/"+id);
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
