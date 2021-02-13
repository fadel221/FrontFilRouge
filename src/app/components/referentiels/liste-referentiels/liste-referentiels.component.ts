import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnexionService } from 'src/app/Services/connexion.service';
import { ReferentielService } from 'src/app/Services/referentiel.service';
import { ToolsService } from 'src/app/Services/tools.service';

@Component({
  selector: 'app-liste-referentiels',
  templateUrl: './liste-referentiels.component.html',
  styleUrls: ['./liste-referentiels.component.css']
})
export class ListeReferentielsComponent implements OnInit {

  constructor(private conn:ConnexionService,private _router:Router,private service:ReferentielService,private serv:ToolsService,private param:ActivatedRoute) { }
  searchValue:any;
  panelOpenState = false;
  referentiels:any;
  showSpinner=false;
  ShowData=true;
  ngOnInit(): void {
    setTimeout(() => {
        this.showSpinner=!this.showSpinner;
        this.ShowData=!this.ShowData;
      },
        2000)
      this.service.getReferentiels().subscribe(
        (response:any)=>
        {
          this.referentiels=response["hydra:member"];
        }
      )
        
  }

  redirect(data:any){
    this.serv.redirect(data)
  }

  header(id:any)
  {
    console.log(id)
    this._router.navigate(['/home/referentiels/detail/'+id])
  }
  logout()
  {
    this.conn.logout()
  }

}
