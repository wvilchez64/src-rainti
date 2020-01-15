import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditorGroupMainService } from '../creditor-group-services/creditor-group-main.service';


@Component({
  selector: 'app-creditor-group-',
  templateUrl: './creditor-group-main.component.html',
  styleUrls: ['./creditor-group-main.component.css']
})
export class CreditorGroupMainComponent implements OnInit {

  entities: Array<any> = []
  searchText: ''
  name: ''
  constructor(private _creditorGroupMainService: CreditorGroupMainService,
              private _router: Router){}   

  ngOnInit() {
    this._creditorGroupMainService.getCreditorsGroup()
    .subscribe(      
      res => this.entities = res,
      err => console.log(err)
    ) 
  }

  addCreditorGroup(){
      this._router.navigate(['/gestor-adicionar'])
  }

}
