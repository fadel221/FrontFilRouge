import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
data:any
url:any
avatar:any
  constructor(private _userservice:UserService,private _route:ActivatedRoute,private _router:Router) { 

  }

  ngOnInit(): void {
  
    
      let id=Number(this._route.snapshot.paramMap.get('id'));
      this._userservice.getUsers().subscribe(
        (response:any)=>
        {
          this.data =this._userservice.getUserById(id,response["hydra:member"])
          this.url='data:image/jpg;base64,'+this.data.avatar
          console.log(this.data)
        }
      )
      
    }

    selectedFile(files: FileList,event:any)
  {
    this.avatar=files.item(0);
    let reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload =(event: any) =>
    {
      this.url=event.target.result
    }
    
  }

  UpdateUser(data:any)
  {
    console.log (data)
    const formdata=new FormData();
    formdata.append('username',data.username)
    formdata.append('prenom',data.firstname)
    formdata.append('nom',data.lastname)
    formdata.append('email',data.email)
    formdata.append('profil_id',this.data.profil.id)
    formdata.append('avatar',this.avatar, this.avatar.name)
    formdata.append("_method","PUT")
    if (confirm('Etes vous sure de vouloir appliquer ces modifications'))
    {
      
      this._userservice.updateUser(formdata,this.data.id).subscribe(
        (response:any)=>
        {
          console.log(response)
          this._router.navigate(['user'])
        },
        (error)=>
        {
          console.log(error)
        }
      )
    }
    
  }
  }

  


