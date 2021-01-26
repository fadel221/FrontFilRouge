import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  constructor(private Httpclient:HttpClient) { }

  getAllpromos()
  {
    return this.Httpclient.get("http://localhost:8000/api/admin/promos");
  }

  addPromo(data:any)
  {
    return this.Httpclient.post("http://localhost:8000/api/admin/promos",data);
  }

  updatePromo(data:any)
  {
    return this.Httpclient.put("http://localhost:8000/api/admin/promos/"+data.id,data);
  }

  archivePromo(id:any)
  {
    return this.Httpclient.delete("http://localhost:8000/api/admin/promos/"+id);
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
