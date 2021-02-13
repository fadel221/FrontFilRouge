import { Component, OnInit } from '@angular/core';
import $ from "jquery";
import { ConnexionService } from 'src/app/Services/connexion.service';
import { ToolsService } from 'src/app/Services/tools.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private conn:ConnexionService,private service:ToolsService) { }
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

  logout()
  {
    this.conn.logout()
  }

}
