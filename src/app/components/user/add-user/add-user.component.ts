import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfilService } from 'src/app/Services/profil.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  url="./assets/images/background.jpg";
  avatar:any
  UserForm:FormGroup;
  ngOnInit(): void {
    this.UserForm=new FormGroup(
      {
        'username': new FormControl (null,[Validators.required,Validators.minLength(10),Validators.maxLength(20)]),
        'email': new FormControl (null,[Validators.required,Validators.minLength(10),Validators.maxLength(20)]),
        'firstname': new FormControl (null,[Validators.required,Validators.minLength(10),Validators.maxLength(20)]),
        'profil': new FormControl (null,[Validators.required,Validators.minLength(10),Validators.maxLength(20)]),
        'avatar': new FormControl (null,[Validators.required,Validators.minLength(10),Validators.maxLength(20)]),
        'file': new FormControl (null,[Validators.required,Validators.minLength(10),Validators.maxLength(20)])
      }
    )
    /*getAllprofil()
    {
      
    }*/
  }

  constructor(private route:Router,private serviceprofil:ProfilService) { }
  Add()
  {
    this.route.navigate(['competences/add']);
  }

  addUser(form:any)
  {
    console.log(form)
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
