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
    return this.Httpclient.get("http://localhost:8000/api/admin/users");
  }

  AddUser(data: any){
     return this.Httpclient.post("http://localhost:8000/api/admin/users",data)
  }

  
}
