import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(items: any[],  searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();    
    
    
      return items.filter(it => { 
               
        return (it.name.toLocaleLowerCase().includes(searchText) ||
                it.cpf.toLocaleLowerCase().includes(searchText) ||
                 it.email.toLocaleLowerCase().includes(searchText) ||
                 it.lastname.toLocaleLowerCase().includes(searchText) ||
                 it.username.toLocaleLowerCase().includes(searchText) );
      });
    
    
  }

}
