import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  constructor(private Httpclient:HttpClient) { }

  getAllpromos()
  {
    return this.Httpclient.get(environment.url+"admin/promos");
  }

  addPromo(data:any)
  {
    return this.Httpclient.post(environment.url+"admin/promos",data);
  }

  updatePromo(data:any)
  {
    return this.Httpclient.put(environment.url+"admin/promos/"+data.id,data);
  }

  archivePromo(id:any)
  {
    return this.Httpclient.delete(environment.url+"admin/promos/"+id);
  }

  getPromoById(id:number,data:any)
  {
    const promo: any = data.find(
     (p:any) => {
       return p.id===id;
     } 
    );
      return promo;
  }
}
