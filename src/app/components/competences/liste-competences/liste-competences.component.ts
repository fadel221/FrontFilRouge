import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from "jquery";
import { CompetencesService } from 'src/app/Services/competences.service';
import { GrpcompetencesService } from 'src/app/Services/grpcompetences.service';
import { ToolsService } from 'src/app/Services/tools.service';
@Component({
  selector: 'app-liste-competences',
  templateUrl: './liste-competences.component.html',
  styleUrls: ['./liste-competences.component.css']
})
export class ListeCompetencesComponent implements OnInit {

  constructor(private _router:Router,private service:GrpcompetencesService,private competenceservice:CompetencesService,private serv:ToolsService) { }

  

  panelOpenState = false;
  Groupecompetence:any;
  Competences:any;
  referentiels:any;
  Niveaux=[{

  },
{

},
{

}];
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
        this.Competences=this.referentiels["competences"][0];
        this.Niveaux=this.Competences["niveau"];
        console.log(this.Niveaux)
      }
    )
        
  }

  

  Show(data:any)
  {
    
    this.Groupecompetence=this.service.getGrpecompetenceByLibelle(data.innerHTML,this.referentiels);
    this.Competences=this.Groupecompetence["competences"]
    console.log(this.Groupecompetence)
  }
  ShowOneNiveau(data:any)
  {
    
    $("#grp1").hide();
    $("#grp2").hide();
    $("#grp-3").hide();
    $("#"+data.id).show()
  }
  Onfocus(data:any)
  {
    
    $('#'+data.id).css("background-color", "darkblue");
    $('#'+data.id).css("color", "white");
    this.Niveaux=this.competenceservice.getCompetenceByLibelle(data.innerText,this.Competences)["niveau"]
    console.log(this.Niveaux)
  }
  Onblur(data:any)
  {

    $('#'+data.id).css("background-color", "");
    $('#'+data.id).css("color", "black");
    console.log(data);
  }

  redirect(data:any){
    this.serv.redirect(data)
  }

}
