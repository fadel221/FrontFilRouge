import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompetencesService } from 'src/app/Services/competences.service';
import { ConnexionService } from 'src/app/Services/connexion.service';
import { GrpcompetencesService } from 'src/app/Services/grpcompetences.service';
import { ToolsService } from 'src/app/Services/tools.service';

@Component({
  selector: 'app-add-grpecompetence',
  templateUrl: './add-grpecompetence.component.html',
  styleUrls: ['./add-grpecompetence.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class AddGrpecompetenceComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,private serv:ToolsService,private _router:Router,private conn:ConnexionService,private competenceservice:CompetencesService,private grpecompservice:GrpcompetencesService) {}
  showSpinner=false
  ShowData=true
  competences=[
    {
      "id":1
    }
  ]
  todo:any[]
  done:any[]

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  ngOnInit() {
    setTimeout(() => {
      this.showSpinner=!this.showSpinner;
      this.ShowData=!this.ShowData;
    },
      2000)

    this.firstFormGroup = this._formBuilder.group({
      libelle: ['', Validators.required],
      descriptif:['', Validators.required],
      type: ['', Validators.required],
      nom: ['', Validators.required]
    });
    
    this.competenceservice.getCompetences().subscribe(
      (response:any)=>
      {
        this.todo=response["hydra:member"];
        this.done=[]
      }
    )
  }


  redirect(data:any){
    this.serv.redirect(data)
  }
  
  header(data:any)
  {
    this._router.navigate(['/home/profils/details/'+data])
  }

  logout()
  {
    this.conn.logout()
  }

  addGrpecompetences(data:any)
  {
    
      for(let i=0;i<this.done.length;i++)
      {
        this.competences.push(
          {
            "id":this.done[i]['id']
          }
          ) 
      }
      let groupecompetence=
      {
        "libelle":this.firstFormGroup.get('libelle')?.value,
        "type":this.firstFormGroup.get('type')?.value,
        "descriptif":this.firstFormGroup.get('descriptif')?.value,
        "nom":this.firstFormGroup.get('nom')?.value,
        "competences":this.competences
      }

      this.grpecompservice.AddGrpeCompetence(groupecompetence).subscribe(
        (response:any)=>
        {
          alert('succees')
        }
      )
      
  }

}
