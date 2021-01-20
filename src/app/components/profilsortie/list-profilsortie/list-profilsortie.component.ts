import { Component, OnInit } from '@angular/core';
import { ProfilsortieService } from 'src/app/Services/profilsortie.service';

@Component( {
  selector: 'app-list-profilsortie',
  templateUrl: './list-profilsortie.component.html',
  styleUrls: ['./list-profilsortie.component.css']
})
export class ListProfilsortieComponent implements OnInit {

  constructor(private service:ProfilsortieService) { }

  dataSource:any;
  Defaultvalue:any
displayedColumns=['libelle','action']
  ngOnInit(): void {
    this.service.getProfilSorties().subscribe(
      (response:any) =>
      {
        this.dataSource=response["hydra:member"];
        console.log(this.dataSource)
      }
    )
  }

  editProfilsortie(id:any)
  {
    let profilsortie=this.service.getProfilsortieById(Number(id),this.dataSource)
    console.log(profilsortie);
    /*this.service.updateProfilsortie(profilsortie).subscribe(
      (response:any)=>
      {

      }*/ 
    
  }

  selected(data:Event)
  {
    console.log(data)
    
    let td= document.getElementById(data.id);
    this.Defaultvalue=td.outerHTML
    console.log(td);
    let libelle=td.textContent
    td.innerHTML='<input id="selected" type="text" value='+libelle+'>'

  }

  defaultvalue(data:Event)
  {
    console.log(data.value)
    let td= document.getElementById(data.id);
    td.innerHTML=this.Defaultvalue
  }

  updateProfilsortie(id:any)
  {
    if (confirm('Etes vous sur de vouloir le supprimer???'))
    {
    this.service.archiveProfilsortie(Number(id)).subscribe(
      (response:any)=>
      {
          console.log (response)
      }
      
    )
  }
}

}
