import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import $ from 'jquery';
import { ConnexionService } from 'src/app/Services/connexion.service';
import { ToolsService } from 'src/app/Services/tools.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  dataSource:any;
  searchValue:any;
  length:any;
  page:any
  displayedColumns=['avatar','username','prenom','nom','email','action'];
  panelOpenState = false;
  showSpinner=false;
  ShowData=true;
  @ViewChild (MatPaginator) paginator:MatPaginator
  
  constructor(private conn:ConnexionService,private _router:Router,private serv:ToolsService,private param:ActivatedRoute,private service:UserService,private router:Router) { }

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
              this.length=Math.ceil(success["nbre_user"]/10);
              this.page=1
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

  archive(id:any)
  {
    this.service.archiveUser(id).subscribe(
      (response:any)=>
      {
        alert("Suppression fait avec succés")
        this.router.navigate(['/home/users'])
      }
    )
  }

  headerDetail(id:any)
  {
    let User=this.service.getUserById(Number(id),this.dataSource)
    this.router.navigate(['home/users/details/'+id])
  }

  headerUpdate(id:any)
  {
    let User=this.service.getUserById(Number(id),this.dataSource)
    this.router.navigate(['home/users/update/'+id])
  }

  

  paginate(number:any,data:any)
  {
    console.log(data)
    $('#line').css('background-color','')
    if (number=="»" && this.length>this.page)
    {
      this.page++
    }
    else if (number==="«" && this.page>1)
    {
      this.page--;
    }
    
    else
    {
      this.page=number
    }
    this.service.getUsersPaginate(this.page).subscribe(
      (response:any)=>
      {
        this.dataSource=response["hydra:member"];
        this.dataSource=this.service.getEmployee(this.dataSource)
      }
    )
  }

    
        
  

  redirect(data:any){
    this.serv.redirect(data)
  }

  header(id:any)
  {
    console.log(id)
    this._router.navigate(['/homs.dail/'+id])
  }

  logout()
  {
    this.conn.logout()
  }

}
