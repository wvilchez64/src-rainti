import { Component, OnInit } from '@angular/core';
import { CreditorMainService } from './creditor-services/creditor-main.service';
import { CreditorAddService } from './creditor-services/creditor-add.service';

@Component({
  selector: 'app-creditor',
  templateUrl: './creditor.component.html',
  styleUrls: ['./creditor.component.css']
})
export class CreditorComponent implements OnInit {

  
  creditors: Array<any> = []
  searchText: ''
  name: ''

  constructor(private _creditorService: CreditorMainService,
    private _creditorAddService: CreditorAddService,
    ) { 
      
    }

  ngOnInit() {
    this._creditorService.getCreditors()
    .subscribe(      
      res => {
        this.creditors = res
      },
      err => {
        console.log(err)
      }
    ) 
  }

  addCreditor(){
   
  }


}
