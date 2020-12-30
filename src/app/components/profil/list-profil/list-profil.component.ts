import { Component, OnInit } from '@angular/core';
import { Profil } from 'src/app/entity/profil';
import { ProfilService } from 'src/app/Services/profil.service';

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.css']
})
export class ListProfilComponent implements OnInit {
dataSource:Profil[]=[];
displayedColumns=['id','libelle']
  constructor(private service:ProfilService) { 
    
  }

  ngOnInit(): void {
    this.service.getProfil().subscribe(
      (response:any)=>{
        this.dataSource=response["hydra:member"]
      }
    )
  }

}
