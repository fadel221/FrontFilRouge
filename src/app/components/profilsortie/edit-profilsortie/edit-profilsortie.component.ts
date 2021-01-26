import { Component, OnInit } from '@angular/core';
import { ProfilsortieService } from 'src/app/Services/profilsortie.service';

@Component({
  selector: 'app-edit-profilsortie',
  templateUrl: './edit-profilsortie.component.html',
  styleUrls: ['./edit-profilsortie.component.css']
})
export class EditProfilsortieComponent implements OnInit {

  constructor(private _profilsortieservice:ProfilsortieService) { }
Allprofilsortie:any
  ngOnInit(): void {
    this._profilsortieservice.getProfilSorties().subscribe(
      (response:any)=>
      {
        this.Allprofilsortie=response["hydra:member"];
      }
    )
  }

}
