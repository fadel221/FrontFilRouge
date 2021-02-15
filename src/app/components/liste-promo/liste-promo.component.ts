import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { ConnexionService } from 'src/app/Services/connexion.service';
import { PromoService } from 'src/app/Services/promo.service';
import { ReferentielService } from 'src/app/Services/referentiel.service';
import { ToolsService } from 'src/app/Services/tools.service';
import {map, startWith} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
@Component({
  selector: 'app-liste-promo',
  templateUrl: './liste-promo.component.html',
  styleUrls: ['./liste-promo.component.css']
})
export class ListePromoComponent implements OnInit {

  panelOpenState = false;
  profilsortie=['Dev web','Digital Mark','Data Artisan','Web Designer','kf','&r','fkel','fr']
  showSpinner=false;
  ShowData=true;
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

  constructor( private _refservice:ReferentielService,private _promoservice:PromoService,private fb:FormBuilder,private conn:ConnexionService,private service:ToolsService) {
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
    setTimeout(() => {
        this.showSpinner=!this.showSpinner;
        this.ShowData=!this.ShowData;
      },
        2000)
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

  redirect(data:any){
    this.service.redirect(data)
  }

  logout()
  {
    this.conn.logout()
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




