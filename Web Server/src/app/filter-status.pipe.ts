import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStatus'
})
export class FilterStatusPipe implements PipeTransform {

  transform(items: any[],  searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();    
    
    if(searchText == 'todos') {
      return items
    }else{
      return items.filter(it => {
        
        return (it.status.toLocaleLowerCase() == (searchText));
      });
    }
    
  }

}
