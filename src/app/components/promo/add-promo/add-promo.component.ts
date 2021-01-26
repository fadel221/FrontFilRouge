import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ReferentielService } from 'src/app/Services/referentiel.service';
import { PromoService } from 'src/app/Services/promo.service';
@Component({
  selector: 'app-add-promo',
  templateUrl: './add-promo.component.html',
  styleUrls: ['./add-promo.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class AddPromoComponent implements OnInit {

  allReferentiel=[]

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  FormPromo:FormGroup
  filteredFruits: Observable<string[]>;
  fruits=[];
  emails =[]
  langues=['Français','Anglais'];
  avatar:any
  file:any
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('fruitInput2') fruitInput2: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor( private _refservice:ReferentielService,private _promoservice:PromoService,private fb:FormBuilder ) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.fruits.slice()));
  }


  

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    console.log(this.fruits)
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.fruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

  
  

  ngOnInit(): void {

    this.FormPromo=this.fb.group({
      langue:[""],
      titre:[""],
      description:[""],
      fabrique:[""],
      referenceAgate:[""],
      formateur:[""],
      lieu:[""],
      avatar:[""],
      date_debut:[""],
      date_fin:[""],
      apprenant:[""],
      referentiels:[""],
      file:[""]

    })

   


    this._refservice.getReferentiels().subscribe(
      (response:any)=>
      {
        this.allReferentiel=response["hydra:member"];
      }
    )
    
  }

  selectedAvatar(files: FileList)
  {
    
    this.avatar=files.item(0);
  }

  selectedFile(files: FileList)
  {
    
    this.file=files.item(0);
  }

  addPromo(form:FormGroup)
  {
    console.log(form.value)
    const formdata=new FormData();
    formdata.append('titre',this.FormPromo.get('titre')?.value)
    formdata.append('langue',this.FormPromo.get('langue')?.value)
    formdata.append('description',this.FormPromo.get('description')?.value)
    formdata.append('fabrique',this.FormPromo.get('fabrique')?.value)
    formdata.append('lieu',this.FormPromo.get('lieu')?.value)
    formdata.append('referenceAgate',this.FormPromo.get('referenceAgate')?.value)
    formdata.append('avatar',this.avatar,this.avatar.name)
    formdata.append('file',this.file,this.file.name)
    formdata.append('referenceAgate',this.FormPromo.get('referenceAgate')?.value)
    this.fruits.forEach(referentiel => {
      formdata.append('referentiel_array[]',referentiel)
    });
    this._promoservice.addPromo(formdata).subscribe(
      (response:any)=>
      {
        console.log(response);
      }
    )

}

}
