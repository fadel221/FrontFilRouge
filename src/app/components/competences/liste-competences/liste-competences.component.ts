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
  referentiels:any;
  Groupecompetence:any;
  niveaux:any;
  showSpinner=false;
  ShowData=true;
  competences:any;
  competence:any
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
        console.log(this.referentiels)
      }
    )
        
  }

  

  Show(data:any)
  {
    console.log(data)
    this.Groupecompetence=this.service.getGrpecompetenceByLibelle(data.innerText,this.referentiels);
    this.competences=this.Groupecompetence["competences"]
    console.log(this.Groupecompetence)
    $('#'+this.competences[0].id+'s').css("background-color", "darkblue");
    $('#'+this.competences[0].id+'s').css("color", "white");
  }
  
  Onfocus(data:any)
  {
    $('.mat-flat-button').css("background-color", "")
    $('#'+data.id).css("background-color", "darkblue");
    $('#'+data.id).css("color", "white");
     this.competence=this.competenceservice.getCompetenceByLibelle(data.innerText,this.competences)
    console.log(this.competence)
    this.niveaux=this.competence["niveau"][0]
    $('#1').css("background-color", "darkblue");
    $('#1').css("color", "white");
  }
  colorLevel(id:any)
  {
    $('#1,#2,#3').css("background-color", "")
    $('#1,#2,#3').css("color", "#b8ecfb")
    $('#'+id).css("background-color", "darkblue");
    $('#'+id).css("color", "white");
    this.niveaux=this.competence["niveau"][Number(id)-1]
    console.log(this.niveaux)
  }
  redirect(data:any){
    this.serv.redirect(data)
  }

  header()
  {
    this._router.navigate(['home/competences/add'])
  }

  update(id:any)
  {
    this._router.navigate(['home/competences/update/'+id])
  }

  logout()
  {
    this.conn.logout()
  }

}
