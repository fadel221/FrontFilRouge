import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(private router:Router) { }

  redirect(data:any)
  {
    switch (data)
    {
      //case 1: this.router.navigate['/home'];break;
      case 2: this.router.navigate(['/home/users']);break;
      case 3: this.router.navigate(['/home/profils']);break;
      case 4: this.router.navigate(['/home/groupecompetences']);break;
      case 5: this.router.navigate(['/home/competences']);break;
      case 6: this.router.navigate(['/home/referentiels']);break;
      case 7: this.router.navigate(['/home/profilsorties']);break;
      case 8: this.router.navigate(['/home/promos']);break; 
      default: this.router.navigate['/home'];break;
    }
  }

  transform(Data: any[], searchValue:any): any[] {
    if (!Data || !searchValue)
      return Data
    return Data.filter(data=>data.libelle.toLowerCase().includes(searchValue.toLowerCase()))
  }
}
