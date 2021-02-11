import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { ToolsService } from 'src/app/Services/tools.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  dataSource:any;
  length:any
  displayedColumns=['avatar','username','prenom','nom','email','action'];
  panelOpenState = false;
  showSpinner=false;
  ShowData=true;
  @ViewChild (MatPaginator) paginator:MatPaginator
  
  constructor(private _router:Router,private serv:ToolsService,private param:ActivatedRoute,private service:UserService,private router:Router) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.showSpinner=!this.showSpinner;
      this.ShowData=!this.ShowData;
    },
      2000)
    
    this.service.getUsers().subscribe(
      (response:any)=>{
          this.dataSource=response["hydra:member"]
          this.dataSource=this.service.getEmployee(this.dataSource)
          this.dataSource.paginator=this.paginator
          console.log(this.dataSource);
          this.service.getCountUser().subscribe(
            (success:any)=>{
              this.length=success["nbre_user"];
              console.log(this.length)
            }
          )
      }
    )
  }

  
  AddUser()
  {
    this.router.navigate(["user/add"])
  }

  ArchiveUser(id:any)
  {
    console.log (id)
  }

  

  

    
        
  

  redirect(data:any){
    this.serv.redirect(data)
  }

  header(id:any)
  {
    console.log(id)
    this._router.navigate(['/homs.dail/'+id])
  }

}
