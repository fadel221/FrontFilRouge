import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {
  dataSource:User[]=[];
  displayedColumns=['avatar','username','prenom','nom','email','action'];
  constructor(private service:UserService,private router:Router) 
  { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(
      (response:any)=>
      {
          this.dataSource=response["hydra:member"]
          console.log(this.dataSource);
      }
    )
  }

  AddUser()
  {
    this.router.navigate(["user/add"])
  }

}
