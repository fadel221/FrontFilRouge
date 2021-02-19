import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CompetencesService } from 'src/app/Services/competences.service';
import { ConnexionService } from 'src/app/Services/connexion.service';
import { GrpcompetencesService } from 'src/app/Services/grpcompetences.service';
import { ToolsService } from 'src/app/Services/tools.service';

@Component({
  selector: 'app-update-competence',
  templateUrl: './update-competence.component.html',
  styleUrls: ['./update-competence.component.css']
})
export class UpdateCompetenceComponent implements OnInit {





  constructor(private _formBuilder: FormBuilder,private conn:ConnexionService,private service:ToolsService,private _grpservice:GrpcompetencesService,private fb:FormBuilder,private _competenceserv:CompetencesService,private route:ActivatedRoute) { }
  todo:any[]
  done :any[]

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;



  

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        console.log(this.done)
    }
  }
  panelOpenState = false;
  profilsortie=['Dev web','Digital Mark','Data Artisan','Web Designer','kf','&r','fkel','fr']
  showSpinner=false;
  ShowData=true;
  groupecmps:any;
  competence:any;
  ngOnInit(): void {
    setTimeout(() => {
        this.showSpinner=!this.showSpinner;
        this.ShowData=!this.ShowData;
      },
        2000)
        this.firstFormGroup = this._formBuilder.group({
          firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
          secondCtrl: ['', Validators.required]
        });
        this._grpservice.getGrpeCompetence().subscribe(
          (response:any)=>
          {
            this.todo=response["hydra:member"]
            this._competenceserv.getCompetences().subscribe(
              (success:any)=>
              {
                this.done=success['hydra:member']
                let id=Number(this.route.snapshot.paramMap.get('id'));
                this.done=this._competenceserv.getCompetenceById(id,this.done)
                this.competence=this.done
                console.log(this.todo,this.done)
              }
            )
            
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
  niveaux:any[]     
    

 

    add(input:any,input2:any)
    {
      this.niveaux=[
        {
          "groupeaction":input2.groupeaction1,
          "critereEvaluation":input2.critereEvaluation1,    
          "criterePerformance":input2.criterePerformance1, 
        },
        {
          "groupeaction":input2.groupeaction2,
          "critereEvaluation":input2.critereEvaluation2,    
          "criterePerformance":input2.criterePerformance2, 
        },
        {
          "groupeaction":input2.groupeaction3,
          "critereEvaluation":input2.critereEvaluation3,    
          "criterePerformance":input2.criterePerformance3, 
        },
         
      ]
      let competence=
      {
        "libelle": this.FormCompetence.get('libelle')?.value,
        "niveau": this.niveaux,
        "groupecompetence":[
        {  
          "id":1
        }
        ]
      }
      this._competenceserv.UpdateCompetence(competence,this.competence['id']).subscribe(
        (response:any)=>
        {
            console.log(response)
        }
      )
    }

}
    
     
  
   