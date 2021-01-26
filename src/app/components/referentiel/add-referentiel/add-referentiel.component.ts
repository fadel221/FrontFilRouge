import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import {MatAutocomplete,MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import { map,startWith} from 'rxjs/operators';
import { GrpcompetencesService } from 'src/app/Services/grpcompetences.service';
import { ReferentielService } from 'src/app/Services/referentiel.service';







@Component({
  selector: 'app-add-referentiel',
  templateUrl: './add-referentiel.component.html',
  styleUrls: ['./add-referentiel.component.css']
})

export class AddReferentielComponent implements OnInit {

  FormReferentiel:FormGroup
  grpcmps:any
  presentation:any
  constructor(private fb:FormBuilder,private _grpcmpservice:GrpcompetencesService,private ref_service:ReferentielService,private _router:Router) {
    
  }
    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    fruits=[]
  

    selected(event: MatAutocompleteSelectedEvent): void {
      this.fruits.push(event.option.viewValue);
      console.log(this.fruits)
    }

    add(event: MatChipInputEvent): void {
      const input = event.input;
      let value:any = event.value;
  
      // Add our fruit
      if ((value || '').trim()) {
        this.fruits.push(value)
        
      }

      
  
      // Reset the input value
      if (input) {
        input.value = '';
      }
    }
  
    displayFn(subject:any)
    {
      return subject ? subject.id : undefined
    }

    remove(fruit: any): void {
      const index = this.fruits.indexOf(fruit);
  
      if (index >= 0) {
        this.fruits.splice(index, 1);
      }
    }  
  ngOnInit(): void { 

    this._grpcmpservice.getGrpeCompetence().subscribe(
      (response:any)=>
      {
        console.log(this.grpcmps=response["hydra:member"]);
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

  addReferentiel(form:FormGroup)
  {
    console.log(form)
    const formdata=new FormData();
    formdata.append('libelle',form.get('libelle')?.value)
    formdata.append('programme',form.get('presentation')?.value)
    formdata.append('critereAdmission',form.get('critereAdmission')?.value)
    formdata.append('critereEvaluation',form.get('critereEvaluation')?.value)
    formdata.append('presentation',this.presentation,this.presentation.name)
    for (let x in this.fruits)
    {
      formdata.append('groupecompetence_array[]',x)
    }
    console.log(this.fruits)
    this.ref_service.addReferentiel(formdata).subscribe(
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


  redirect()
  {
    this._router.navigate(['referentiels'])
  }


}