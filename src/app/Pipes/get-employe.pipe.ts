import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getEmploye'
})
export class GetEmployePipe implements PipeTransform {

  transform(value:any[]): unknown {

     let filter= value.filter((user:any)=>{
        if(user.profil.libelle!="Apprenant")
            return true;
    })
    return filter
  }

}
