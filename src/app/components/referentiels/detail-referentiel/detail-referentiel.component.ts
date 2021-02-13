import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  $  from 'jquery';
import { ConnexionService } from 'src/app/Services/connexion.service';
import { ReferentielService } from 'src/app/Services/referentiel.service';
import { ToolsService } from 'src/app/Services/tools.service';

@Component({
  selector: 'app-detail-referentiel',
  templateUrl: './detail-referentiel.component.html',
  styleUrls: ['./detail-referentiel.component.css']
})
export class DetailReferentielComponent implements OnInit {

  constructor(private conn:ConnexionService,private route:ActivatedRoute,private service:ReferentielService,private serv:ToolsService) { }
  
  referentiels:any;
  data:any;
  pdfSrc:any;
  panelOpenState = false;
  showSpinner=false;
  ShowData=true;
  ngOnInit(): void {
    setTimeout(() => {
      this.showSpinner=!this.showSpinner;
      this.ShowData=!this.ShowData;
      $('')
    },
      2000)
    this.service.getReferentiels().subscribe(
      (response:any)=>
      {
        this.referentiels=response["hydra:member"];
        let id=Number(this.route.snapshot.paramMap.get('id'));
        this.data=this.service.getReferentielById(id,this.referentiels)
        this.pdfSrc='data:file/pdf;base64,'+this.data.presentation
        console.log(this.data);
      }
    )
    }

redirect(data:any){
  this.serv.redirect(data)
}

logout()
{
  this.conn.logout()
}
}

