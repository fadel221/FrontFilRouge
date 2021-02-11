import { Component, OnInit } from '@angular/core';
import { ToolsService } from 'src/app/Services/tools.service';

@Component({
  selector: 'app-add-referentiel',
  templateUrl: './add-referentiel.component.html',
  styleUrls: ['./add-referentiel.component.css']
})
export class AddReferentielComponent implements OnInit {

  constructor(private service:ToolsService) { }
  panelOpenState = false;
  profilsortie=['Dev web','Digital Mark','Data Artisan','Web Designer','kf','&r','fkel','fr']
  showSpinner=false;
  ShowData=true;
  ngOnInit(): void {
    setTimeout(() => {
        this.showSpinner=!this.showSpinner;
        this.ShowData=!this.ShowData;
      },
        2000)
        
  }
  

  redirect(data:any){
    this.service.redirect(data)
  }

  

}
