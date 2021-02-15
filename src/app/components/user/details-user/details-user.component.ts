import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnexionService } from 'src/app/Services/connexion.service';
import { ToolsService } from 'src/app/Services/tools.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {

  constructor(private conn:ConnexionService,private service:ToolsService,private serv:UserService,private route:ActivatedRoute) { }
  Users:any;
  panelOpenState = false;
  showSpinner=false;
  ShowData=true;
  ngOnInit(): void {
    
    this.serv.getUsers().subscribe(
      (response:any)=>
      {
        this.Users=response["hydra:member"];
        let id=Number(this.route.snapshot.paramMap.get('id'));
        this.Users=this.serv.getUserById(id,this.Users)
        console.log(this.Users);
      }
    )

    setTimeout(() => {
        
        this.showSpinner=!this.showSpinner;
        this.ShowData=!this.ShowData;
      },
        2000)
        
  }
  

  redirect(data:any){
    this.service.redirect(data)
  }

  logout()
  {
    this.conn.logout()
  }

}
