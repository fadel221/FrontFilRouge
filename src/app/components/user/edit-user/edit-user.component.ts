import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilService } from 'src/app/Services/profil.service';
import { ToolsService } from 'src/app/Services/tools.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

data:any
url:any
avatar:any
profil:any

showSpinner=false;
  ShowData=true;
  profils:any;
  //UserForm:FormGroup;
  constructor(private service:ToolsService,private route:Router,private serviceprofil:ProfilService,private userservice:UserService,private toolservice:ToolsService,private router:Router,private _userservice:UserService,private _route:ActivatedRoute,private _router:Router,private profilservice:ProfilService) { }
  
  

  ngOnInit(): void {

    setTimeout(() => {
      this.showSpinner=!this.showSpinner;
      this.ShowData=!this.ShowData;
    },
      2000)
      let id=Number(this._route.snapshot.paramMap.get('id'));
      this._userservice.getUsers().subscribe(
        (response:any)=>
        {
          this.data =this._userservice.getUserById(id,response["hydra:member"])
          this.url='data:image/jpg;base64,'+this.data.avatar
          console.log(this.data)
          this.profilservice.getProfil().subscribe(
            (success:any)=>
            {
              this.profil=success["hydra:member"]
            }
          )
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
          this._router.navigate(['home/users'])
        },
        (error)=>
        {
          console.log(error)
        }
      )
    }
    
  }

  redirect(data:any){
    this.service.redirect(data)
  }

  
  Add()
  {
    this.route.navigate(['home/users/add']);
  }

}
