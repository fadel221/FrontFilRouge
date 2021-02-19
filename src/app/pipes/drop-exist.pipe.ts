import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dropExist'
})
export class DropExistPipe implements PipeTransform {

  transform(data: any[], DropValue:any[]): any[] {
    
    function comparer(otherArray){
      return function(current){
        return otherArray.filter(function(other){
          return other.libelle == current.libelle && other.id == current.id
        }).length == 0;
      }
    }
    
    var onlyInA = data.filter(comparer(DropValue));
    var onlyInB = DropValue.filter(comparer(data));
    
    return onlyInA.concat(onlyInB);

  }

}
    
  


