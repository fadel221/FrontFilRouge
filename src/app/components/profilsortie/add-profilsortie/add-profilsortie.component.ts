import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilsortieService } from 'src/app/Services/profilsortie.service';

@Component({
  selector: 'app-add-profilsortie',
  templateUrl: './add-profilsortie.component.html',
  styleUrls: ['./add-profilsortie.component.css']
})
export class AddProfilsortieComponent implements OnInit {

  constructor(private _profilsortieservice:ProfilsortieService,private _router:Router) { }
Allprofilsortie:any
  ngOnInit(): void {

  }

  addProfilsortie(data:any)
  {
    this._profilsortieservice.addProfilsortie(data).subscribe(
      (response:any)=>
      { 
        
      }
    )
  }

}
