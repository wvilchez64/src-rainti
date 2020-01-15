import { Component, OnInit } from '@angular/core';
import { CreditorContactsService } from '../creditor-services/creditor-contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-creditor-contacts',
  templateUrl: './creditor-contacts.component.html',
  styleUrls: ['./creditor-contacts.component.css']
})
export class CreditorContactsComponent implements OnInit {

  searchText: ''
  name: ''
  creditorContacts: Array<any> = []

  constructor(private _creditorContactsService: CreditorContactsService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.paramMap
    .subscribe(
      params => {
        this._creditorContactsService.getCreditorContacts(params.get('id'))
          .subscribe(      
            res => this.creditorContacts = res,
            err => console.log(err)
          )
      }
    )    
  }

  addCreditorContact(){
    this._route.paramMap
    .subscribe(
      params => {
        this._router.navigate(['/credor-adicionar-contato/'+params.get('id')])           
      }
    )
  }

}