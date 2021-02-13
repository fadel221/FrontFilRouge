import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(Data: any[], searchValue:any): any[] {
    if (!Data || !searchValue)
      return Data
    return Data.filter(data=>data.libelle.toLowerCase().includes(searchValue.toLowerCase()))
  }

}
