import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-archive-user',
  templateUrl: './archive-user.component.html',
  styleUrls: ['./archive-user.component.css']
})
export class ArchiveUserComponent implements OnInit {
data:any
  constructor(private _router:Router,private route:ActivatedRoute,private service:UserService) { }

  ngOnInit(): void {


    let id=Number(this.route.snapshot.paramMap.get('id'));
    this.service.getUsers().subscribe(
      (resp:any)=>
      {
        this.data =this.service.getUserById(id,resp["hydra:member"])
        this.service.archiveUser(this.data.id).subscribe(
          (response:any)=>
          {
            //setTimeout(2000)
            console.log(response)
            this._router.navigate(['user'])
          }
        )
      }
    )
    
    
  }
  }


