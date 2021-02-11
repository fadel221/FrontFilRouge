import { Component, OnInit } from '@angular/core';
import { ProfilsortieService } from 'src/app/Services/profilsortie.service';
import { ToolsService } from 'src/app/Services/tools.service';

@Component({
  selector: 'app-liste-profilsorties',
  templateUrl: './liste-profilsorties.component.html',
  styleUrls: ['./liste-profilsorties.component.css']
})
export class ListeProfilsortiesComponent implements OnInit {
 dataSource:any
  constructor(private service:ProfilsortieService,private serv:ToolsService) { }

  panelOpenState = false;
  profilsortie=['Dev web','Digital Mark','Data Artisan','Web Designer','kf','&r','fkel','fr']
  showSpinner=false;
  ShowData=true;
  ngOnInit(): void {
    this.service.getProfilSorties().subscribe(
      (response:any) =>
      {
        this.dataSource=response["hydra:member"];
        console.log(this.dataSource)
      })
      
    setTimeout(() => {
        this.showSpinner=!this.showSpinner;
        this.ShowData=!this.ShowData;
      },
        2000)
        
  }

  redirect(data:any){
    this.serv.redirect(data)
  }
}
