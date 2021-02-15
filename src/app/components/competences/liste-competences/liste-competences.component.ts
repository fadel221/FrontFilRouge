import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from "jquery";
import { CompetencesService } from 'src/app/Services/competences.service';
import { ConnexionService } from 'src/app/Services/connexion.service';
import { GrpcompetencesService } from 'src/app/Services/grpcompetences.service';
import { ToolsService } from 'src/app/Services/tools.service';
@Component({
  selector: 'app-liste-competences',
  templateUrl: './liste-competences.component.html',
  styleUrls: ['./liste-competences.component.css']
})
export class ListeCompetencesComponent implements OnInit {

  constructor(private _router:Router,private service:GrpcompetencesService,private competenceservice:CompetencesService,private serv:ToolsService,private conn:ConnexionService) { }

  panelOpenState = false;
  Groupecompetence:any;
  Competences:any;
  competence:any;
  Levels:any;
  referentiels:any;
  showSpinner=false;
  ShowData=true;
  ngOnInit(): void {
    setTimeout(() => {
        this.showSpinner=!this.showSpinner;
        this.ShowData=!this.ShowData;
      },
        2000)
    this.service.getGrpeCompetence().subscribe(
      (response:any)=>
      {
        this.referentiels=response["hydra:member"];
        console.log(this.referentiels);
        this.Groupecompetence=this.referentiels[0];
        this.competenceservice.getCompetences().subscribe(
          (success:any)=>
          {
            this.Competences=success["hydra:member"]
          }
        )
      }
    )
        
  }

  

  Show(data:any)
  {
    
    this.Groupecompetence=this.service.getGrpecompetenceByLibelle(data.innerHTML,this.referentiels);
    this.Competences=this.Groupecompetence["competences"]
    console.log(this.Groupecompetence)
  }
  
  Onfocus(data:any)
  {
    $('.mat-flat-button').css("background-color", "")
    $('#'+data.id).css("background-color", "darkblue");
    $('#'+data.id).css("color", "white");
     this.competence=this.competenceservice.getCompetenceByLibelle(data.innerText,this.Competences)
    
  }
  colorLevel(id:any)
  {
    $('#level-1,#level-2,#level-3').css("background-color", "")
    $('#level-1,#level-2,#level-3').css("color", "#b8ecfb")
    $('#'+id).css("background-color", "darkblue");
    $('#'+id).css("color", "white");
  }
  redirect(data:any){
    this.serv.redirect(data)
  }

  logout()
  {
    this.conn.logout()
  }

}
