import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

data:any
  constructor(private route:ActivatedRoute,private service:UserService){

  }
    

  ngOnInit(): void {
    let id=Number(this.route.snapshot.paramMap.get('id'));
    this.service.getUsers().subscribe(
      (response:any)=>
      {
        this.data =this.service.getUserById(id,response["hydra:member"])
        console.log(this.data)
      }
    )
    
    
  }

}
