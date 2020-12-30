import { Injectable } from '@angular/core';
import { CanActivate, Router,   } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnexionService } from '../Services/connexion.service';
import {JwtHelperService} from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private router:Router,private con:ConnexionService,private jwtHelper: JwtHelperService)
  {
    
  }
  canActivate (): boolean
  {
    if (this.con.loggedIn())
    {
      return true
    }
    this.router.navigate(["auth"]);
    return false
  }
  
  
}
