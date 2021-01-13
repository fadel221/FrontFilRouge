import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { GrpcompetencesService } from 'src/app/Services/grpcompetences.service';

@Component({
  selector: 'app-add-referentiel',
  templateUrl: './add-referentiel.component.html',
  styleUrls: ['./add-referentiel.component.css']
})
export class AddReferentielComponent implements OnInit {

  FormReferentiel:FormGroup
  groupecmps:any
  constructor(private fb:FormBuilder,private _grpcmpservice:GrpcompetencesService) 
  { 
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.fruits.slice()));
  }

  

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[]= []
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.fruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
  
  ngOnInit(): void { 

    this._grpcmpservice.getGrpeCompetence().subscribe(
      (response:any)=>
      {
        console.log(this.fruits=response["hydra:member"]);
        
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
  }



}