import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Httpclient:HttpClient) { }

  getUsers()
  {
    return this.Httpclient.get(environment.url+"admin/users?isDeleted=false"); 
  }

  getUsersPaginate(page:any)
  {
    return this.Httpclient.get(environment.url+"admin/users?page="+page+"?isDeleted=false"); 
  }

  AddUser(data: any){
     return this.Httpclient.post(environment.url+"admin/users",data)
  }

  getUserById(id:number,data:any)
  {
    const userFound:any = data.find(
     (u:any) => {
       return u.id===id;
     } 
    );
    return userFound;
  }

  getUsersByProfil(profil:string,data:any[])
  {
   console.log(profil) 
    for (let i=0;i<data.length;i++)
    {
        if (data[i].profil.libelle!=profil)
        {
          delete data[i];
        }
    }
    var filtered = data.filter(function (el) {
      return el != null;
    });
    
    return filtered
  }

  getEmployee(data:any[])
  {
  
    for (let i=0;i<data.length;i++)
    {
        if (data[i].profil.libelle=="APPRENANT")
        {
           data.splice(i,1);
        }
    }
    return data
  }

  updateUser(data:any,id:number)
  {
    return this.Httpclient.post(environment.url+"admin/users/"+id,data)
  }
  archiveUser(id:any)
  {
    return this.Httpclient.delete(environment.url+"admin/users/"+id)
  }

  getCountUser()
  {
    return this.Httpclient.get(environment.url+"admin/users/count");
  }

  
}
