import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/app/Services/connexion.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor (private con: ConnexionService,private router: Router )
{

}
 
login(credentials :any)
{
  
  this.con.GetToken(credentials).subscribe(
    (response : any) => 
    {
      const token= response.token;
      console.log(token)
      localStorage.setItem('token',token);
      this.router.navigate(['user']);
    },
    (error: any) =>
    {
      console.log(error)
    }
  )
}

  ngOnInit(): void {
  }

}
