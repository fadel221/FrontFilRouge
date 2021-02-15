import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompetencesService } from 'src/app/Services/competences.service';
import { ConnexionService } from 'src/app/Services/connexion.service';
import { GrpcompetencesService } from 'src/app/Services/grpcompetences.service';
import { ToolsService } from 'src/app/Services/tools.service';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.css']
})
export class AddCompetenceComponent implements OnInit {

  constructor(private conn:ConnexionService,private service:ToolsService,private _grpservice:GrpcompetencesService,private fb:FormBuilder,private _competenceserv:CompetencesService) { }
  panelOpenState = false;
  profilsortie=['Dev web','Digital Mark','Data Artisan','Web Designer','kf','&r','fkel','fr']
  showSpinner=false;
  ShowData=true;
  groupecmps:any;
  newCompetence:any;
  ngOnInit(): void {
    setTimeout(() => {
        this.showSpinner=!this.showSpinner;
        this.ShowData=!this.ShowData;
      },
        2000)
    
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
  

  redirect(data:any){
    this.service.redirect(data)
  }

  logout()
  {
    this.conn.logout()
  }

  FormCompetence:FormGroup
  NiveauxForm:FormGroup


 

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
