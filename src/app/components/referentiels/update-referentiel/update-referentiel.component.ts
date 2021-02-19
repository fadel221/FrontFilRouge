import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GrpcompetencesService } from 'src/app/Services/grpcompetences.service';
import { ReferentielService } from 'src/app/Services/referentiel.service';
import { ToolsService } from 'src/app/Services/tools.service';

@Component({
  selector: 'app-update-referentiel',
  templateUrl: './update-referentiel.component.html',
  styleUrls: ['./update-referentiel.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})


export class UpdateReferentielComponent implements OnInit {

  
  panelOpenState = false;
  showSpinner=false;
  ShowData=true;
  referentiel:any
  Referentiels:any
  todo:any[]
  done :any[]

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

  ngOnInit(): void {
    setTimeout(() => {
        this.showSpinner=!this.showSpinner;
        this.ShowData=!this.ShowData;
      },
        2000)
          this._grpcmpservice.getGrpeCompetence().subscribe(
          (response:any)=>
          {
            console.log(this.todo=response["hydra:member"]);
          }
        )
        this.ref_service.getReferentiels().subscribe(
          (response:any)=>
          {
            this.Referentiels=response["hydra:member"];
            let id=Number(this.route.snapshot.paramMap.get('id'));
            console.log(this.referentiel=this.ref_service.getReferentielById(id,this.Referentiels) ) 
            this.done=this.referentiel.groupecompetences
          }
        )
        this.FormReferentiel=this.fb.group({
          libelle:[""],
          groupecompetence_array:[""],
          presentation:[""],
          critereAdmission:[""],
          critereEvaluation:[""],
          programme:[""]
        })
          console.log(this.FormReferentiel.value)
        
  }

  FormReferentiel:FormGroup
  grpcmps:any
  presentation:any
  constructor(private fb:FormBuilder,private _grpcmpservice:GrpcompetencesService,private ref_service:ReferentielService,private _router:Router,private service:ToolsService,private route:ActivatedRoute) {
    
  }
    
  

  addReferentiel(form:FormGroup)
  {
    
    console.log(form.value)
    const formdata=new FormData();
    formdata.append('libelle',form.get('libelle')?.value)
    formdata.append('programme',form.get('programme')?.value)
    formdata.append('critereAdmission',form.get('critereAdmission')?.value)
    formdata.append('critereEvaluation',form.get('critereEvaluation')?.value)
    formdata.append('presentation',this.presentation,this.presentation.name)
    formdata.append('_method',"PUT")
    for (let i=0;i<this.done.length;i++)
    {
      formdata.append('groupecompetence_array[]',this.done[i].id)
    }
  
    this.ref_service.updateReferentiel(formdata,this.referentiel.id).subscribe(
      (response:any)=>
      {
        console.log(response)
      }
    )
  }

  selectedFile(files: FileList)
  {
    this.presentation=files.item(0);
  }
  

  redirect(data:any){
    this.service.redirect(data)
  }

}
