import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnexionService } from 'src/app/Services/connexion.service';
import { GrpcompetencesService } from 'src/app/Services/grpcompetences.service';
import { ToolsService } from 'src/app/Services/tools.service';

@Component({
  selector: 'app-details-groupecompetences',
  templateUrl: './details-groupecompetences.component.html',
  styleUrls: ['./details-groupecompetences.component.css']
})
export class DetailsGroupecompetencesComponent implements OnInit {

  constructor(private conn:ConnexionService, private route:ActivatedRoute,private service:GrpcompetencesService,private serv:ToolsService) { }
  
  groupecompetence:any;
  data:any;
  panelOpenState = false;
  showSpinner=false;
  ShowData=true;
  ngOnInit(): void {
    setTimeout(() => {
      this.showSpinner=!this.showSpinner;
      this.ShowData=!this.ShowData;
      
    },
      2000)
    this.service.getGrpeCompetence().subscribe(
      (response:any)=>
      {
        let id=Number(this.route.snapshot.paramMap.get('id'));
        this.data=response["hydra:member"];
        this.data=this.service.getGrpecompetenceById(id,this.data)
        console.log(this.data)
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
