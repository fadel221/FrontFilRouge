import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompetencesService } from 'src/app/Services/competences.service';
import { GrpcompetencesService } from 'src/app/Services/grpcompetences.service';
/**
 * @title Tab group animations
 */
@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.css']
})
export class AddCompetenceComponent implements OnInit {

    
  
  FormCompetence:FormGroup
  NiveauxForm:FormGroup
  newCompetence={}

  constructor(private _grpservice:GrpcompetencesService,private fb:FormBuilder,private _competenceserv:CompetencesService) { }

  ngOnInit(): void {
    this._grpservice.getGrpeCompetence().subscribe(
      (response:any)=>
      {
        console.log(this.groupecmps=response["hydra:member"]);
      }
    )
     this.FormCompetence=this.fb.group({
      libelle:[""],
      groupecompetence: [""]
    })
   this.NiveauxForm= this.fb.group({
      groupeaction1:[""],
      critereEvaluation1:[""],    
      criterePerformance1:[""], 
      groupeaction2:[""],
      critereEvaluation2:[""],    
      criterePerformance2:[""],  
      groupeaction3:[""],
      critereEvaluation3:[""],    
      criterePerformance3:[""],  
       
    
    })
      
    }

    add(input:any,input2:any)
    {
      console.log(input,input2)
      console.log(this.niveaux)
      this.newCompetence=
      {
        libelle:this.FormCompetence.get('libelle')?.value,
        groupecompetence:
        [
            {
              "id":this.FormCompetence.get('groupecompetence')?.value
            }
        ],
        "niveau":
        this.niveaux
    }
    console.log(this.newCompetence)
      this._competenceserv.AddCompetence(this.newCompetence).subscribe(
        (response:any)=>
        {
            console.log(response)
        }
      )
    }
  
   niveaux:any[] = [
    {
      groupeaction:"",
      critereEvaluation:"",    
      criterePerformance:"", 
    },
    {
      groupeaction:"",
      critereEvaluation:"",    
      criterePerformance:"", 
    },
    {
      groupeaction:"",
      critereEvaluation:"",    
      criterePerformance:"", 
    }
    
    
  ]
  

  
}