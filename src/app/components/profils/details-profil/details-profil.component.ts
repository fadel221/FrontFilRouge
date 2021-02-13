import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnexionService } from 'src/app/Services/connexion.service';
import { ProfilService } from 'src/app/Services/profil.service';
import { ToolsService } from 'src/app/Services/tools.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-details-profil',
  templateUrl: './details-profil.component.html',
  styleUrls: ['./details-profil.component.css']
})
export class DetailsProfilComponent implements OnInit {
  
  dataSource:any;
  displayedColumns=['avatar','username','prenom','nom','email','action'];
  constructor(private conn:ConnexionService,private service:ProfilService,private serv:ToolsService,private userservice:UserService,private route:ActivatedRoute) { }
  profil:any
  panelOpenState = false;
  showSpinner=false;
  ShowData=true;
  ngOnInit(): void {
    setTimeout(() => {
        this.showSpinner=!this.showSpinner;
        this.ShowData=!this.ShowData;
      },
        2000)
        this.userservice.getUsers().subscribe(
          (response:any)=>
          {
            this.dataSource=response["hydra:member"];
             this.profil=this.route.snapshot.paramMap.get('profil');
            this.dataSource=this.userservice.getUsersByProfil(this.profil,this.dataSource);
            console.log(this.dataSource);
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
