import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  link='http://localhost:8000/api/login_check';

  constructor (private http: HttpClient) 
  { 
    
  }

  GetToken(credentials: any)
  {
    return this.http.post(this.link,credentials)
  }
  //Vérifie si un token a été généré
  loggedIn()
  {
    return !!localStorage.getItem('token');
  }

  
}
