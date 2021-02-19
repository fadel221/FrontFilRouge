import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/app/Services/connexion.service';
import { GrpcompetencesService } from 'src/app/Services/grpcompetences.service';
import { ToolsService } from 'src/app/Services/tools.service';

@Component({
  selector: 'app-liste-grpecompetence',
  templateUrl: './liste-grpecompetence.component.html',
  styleUrls: ['./liste-grpecompetence.component.css']
})
export class ListeGrpecompetenceComponent implements OnInit {

  constructor(private conn:ConnexionService,private _router:Router,private serv:ToolsService,private service:GrpcompetencesService) { }

  
  
  panelOpenState = false;
  referentiels:any
  showSpinner=false;
  ShowData=true;
  ngOnInit(): void {
    setTimeout(() => {
        this.showSpinner=!this.showSpinner;
        this.ShowData=!this.ShowData;
      },
        2000)
    this.service.getGrpeCompetence().subscribe(
      (response)=>
      {
        this.referentiels=response["hydra:member"];
        console.log(this.referentiels);
        
      }
    )    
  }

  redirect(data:any){
    this.serv.redirect(data)
  }

  headerDetail(data:any)
  {
    this._router.navigate(['/home/groupecompetences/details/'+data])
  }

  headerUpdate(data:any)
  {
    this._router.navigate(['/home/groupecompetences/update/'+data])
  }

  archive(id:any)
  {
    this.service.archiveGrpecompetence(id).subscribe(
      (response:any)=>
      {
        alert('Suppression fait avec succés')
        this._router.navigate(['home/groupecompetences'])
      }
    )
  }

  logout()
  {
    this.conn.logout()
  }

}
