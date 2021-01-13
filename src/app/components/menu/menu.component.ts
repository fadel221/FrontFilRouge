import { Component, OnInit } from '@angular/core';

import { ConnexionService } from 'src/app/Services/connexion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
opened = false;
  
  constructor(private _con:ConnexionService)
    {

    }
   
  ngOnInit(): void {
  }
  logout()
  {
    this._con.logout();
  }

}
