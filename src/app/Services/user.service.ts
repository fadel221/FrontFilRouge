import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Httpclient:HttpClient) { }

  getUsers()
  {
    return this.Httpclient.get("http://localhost:8000/api/admin/users");
  }

  
}
