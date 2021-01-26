import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilsortieService } from 'src/app/Services/profilsortie.service';

@Component({
  selector: 'app-archive-profilsortie',
  templateUrl: './archive-profilsortie.component.html',
  styleUrls: ['./archive-profilsortie.component.css']
})
export class ArchiveProfilsortieComponent implements OnInit {

  constructor(private _profilsortieservice:ProfilsortieService,private _router:Router) { }
Allprofilsortie:any
  ngOnInit(): void {
    this._profilsortieservice.getProfilSorties().subscribe(
      (response:any)=>
      {
        this.Allprofilsortie=response["hydra:member"];
      }
    )
  }

  archiveProfilsortie(data:any)
  {
    this._profilsortieservice.archiveProfilsortie(data).subscribe(
      (response:any)=>
      {
        //this._router.navigate['']
      }
    )
  }

}
