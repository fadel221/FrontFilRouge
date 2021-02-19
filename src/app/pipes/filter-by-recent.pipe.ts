import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByRecent'
})
export class FilterByRecentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
