import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilService } from 'src/app/Services/profil.service';
import { ToolsService } from 'src/app/Services/tools.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-liste-profils',
  templateUrl: './liste-profils.component.html',
  styleUrls: ['./liste-profils.component.css']
})
export class ListeProfilsComponent implements OnInit {
  dataSource:any;
  constructor(private service:ProfilService,private serv:ToolsService,private userservice:UserService,private _router:Router) { }
  Users:any
  panelOpenState = false;
  showSpinner=false;
  ShowData=true;
  ngOnInit(): void {
    setTimeout(() => {
        this.showSpinner=!this.showSpinner;
        this.ShowData=!this.ShowData;
      },
        2000)
        this.service.getProfil().subscribe(
          (response:any)=>{
            this.dataSource=response["hydra:member"]
          }
        )   
  }
  redirect(data:any){
    this.serv.redirect(data)
  }
  
  header(data:any)
  {
    this._router.navigate(['/home/profils/details/'+data])
  }

  

}
