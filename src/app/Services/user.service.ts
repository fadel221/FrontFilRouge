import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Httpclient:HttpClient) { }

  getUsers()
  {
    return this.Httpclient.get("http://localhost:8000/api/admin/users?isDeleted=false");
  }

  AddUser(data: any){
     return this.Httpclient.post("http://localhost:8000/api/admin/users",data)
  }

  getUserById(id:number,data:any):User
  {
    const userFound:User = data.find(
     (u:User) => {
       return u.id===id;
     } 
    );
    return userFound;
  }

  updateUser(data:any,id:number)
  {
    return this.Httpclient.post("http://localhost:8000/api/admin/users/"+id,data)
  }
  archiveUser(id:any)
  {
    return this.Httpclient.delete("http://localhost:8000/api/admin/users/"+id)
  }

  getCountUser()
  {
    return this.Httpclient.get("http://localhost:8000/api/admin/users/count");
  }

  
}
