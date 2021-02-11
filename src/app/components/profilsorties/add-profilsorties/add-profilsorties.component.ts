import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilsortieService } from 'src/app/Services/profilsortie.service';
import { ToolsService } from 'src/app/Services/tools.service';

@Component({
  selector: 'app-add-profilsorties',
  templateUrl: './add-profilsorties.component.html',
  styleUrls: ['./add-profilsorties.component.css']
})
export class AddProfilsortiesComponent implements OnInit {

  constructor(private service:ToolsService ,private _profilsortieservice:ProfilsortieService,private _router:Router) { }

  Allprofilsortie:any

  panelOpenState = false;
  showSpinner=false;
  ShowData=true;
  ngOnInit(): void {
    setTimeout(() => {
        this.showSpinner=!this.showSpinner;
        this.ShowData=!this.ShowData;
      },
        2000)
        
  }

  addProfilsortie(data:any)
  {
    this._profilsortieservice.addProfilsortie(data).subscribe(
      (response:any)=>
      { 
        
      }
    )
  }
  login(data:any)
  {

  }

  redirect(data:any){
    this.service.redirect(data)
  }

}

