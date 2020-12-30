import { Component, OnInit } from '@angular/core';
import { ProfilsortieService } from 'src/app/Services/profilsortie.service';

@Component({
  selector: 'app-list-profilsortie',
  templateUrl: './list-profilsortie.component.html',
  styleUrls: ['./list-profilsortie.component.css']
})
export class ListProfilsortieComponent implements OnInit {

  constructor(private service:ProfilsortieService) { }

  dataSource:any;
displayedColumns=['id','libelle','action']
  ngOnInit(): void {
    this.service.getProfilSorties().subscribe(
      (response:any) =>
      {
        this.dataSource=response["hydra:member"];
        console.log(this.dataSource)
      }
    )
  }

}
