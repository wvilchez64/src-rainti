import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDescription'
})
export class FilterDescriptionPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      //console.log(it)
      return it.description.toLocaleLowerCase().includes(searchText);
    });
  }

}
