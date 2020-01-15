import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditorMainService } from '../creditor-services/creditor-main.service';

@Component({
  selector: 'app-creditor',
  templateUrl: './creditor-main.component.html',
  styleUrls: ['./creditor-main.component.css']
})
export class CreditorMainComponent implements OnInit {

  entities: Array<any> = []
  searchText: ''
  name: ''
  constructor(private _creditorMainService: CreditorMainService,
              private _router: Router){}   

  ngOnInit() {
    this._creditorMainService.getCreditors()
    .subscribe(      
      res => this.entities = res,
      err => console.log(err)
    ) 
  }

  addCreditor(){
      this._router.navigate(['/credor-adicionar'])
  }

}
