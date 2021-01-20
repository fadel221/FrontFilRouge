import { Component,  OnInit,  } from '@angular/core';

import { ReferentielService } from 'src/app/Services/referentiel.service';
@Component({
  selector: 'app-list-referentiel',
  templateUrl: './list-referentiel.component.html',
  styleUrls: ['./list-referentiel.component.css']
})
export class ListReferentielComponent implements OnInit {

AllReferentiel:any
  constructor(private _refservice:ReferentielService) { }
  
  pdfSrc:any

    ngOnInit():void{
    this._refservice.getReferentiels().subscribe(
      (response:any)=>
      {
        
        this.AllReferentiel=response["hydra:member"]
        this.pdfSrc = 'data:file/pdf;base64,'+ this.AllReferentiel[0].presentation;
        console.log (this.pdfSrc)
      }
    )
  }

}
