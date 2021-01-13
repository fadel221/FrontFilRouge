import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profil } from 'src/app/entity/profil';
import { ProfilService } from 'src/app/Services/profil.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  url="./assets/images/background.jpg";
  avatar:any
  //UserForm:FormGroup;
  profils:Profil[]=[];
  ngOnInit(): void {


    /*this.UserForm=new FormGroup(
      {
        'username': new FormControl (null,[Validators.required]),
        'lastname': new FormControl (null,[Validators.required]),
        'email': new FormControl (null,[Validators.required,Validators.email]),
        'firstname': new FormControl (null,[Validators.required]),
        'profil': new FormControl (null,[Validators.required]),
        'file': new FormControl (null,[Validators.required])
      })*/


      this.serviceprofil.getProfil().subscribe(
        (response:any)=>
        {
          this.profils=response["hydra:member"];
        }
      )
    //console.log (this.UserForm)
  }
  addUser (data:any)
  {
    const  formdata=new FormData();
    formdata.append('username',data.username)
    formdata.append('prenom',data.firstname)
    formdata.append('nom',data.lastname)
    formdata.append('email',data.email)
    formdata.append('profil_id',data.profil);
    formdata.append('avatar', this.avatar,this.avatar.name);
    formdata.append('password','1234');
    this.userservice.AddUser(formdata).subscribe(
      (response)=>
      {
        console.log (response)
      }
    )
  }

  constructor(private route:Router,private serviceprofil:ProfilService,private userservice:UserService) 
  {

  }
  Add()
  {
    this.route.navigate(['competences/add']);
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

}
