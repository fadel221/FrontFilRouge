import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {
  dataSource:any;
  length:any
  displayedColumns=['avatar','username','prenom','nom','email','action'];
  @ViewChild (MatPaginator) paginator:MatPaginator
  constructor(private service:UserService,private router:Router) 
  { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(
      (response:any)=>
      {
          this.dataSource=response["hydra:member"]
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

  
  
    
  

}
