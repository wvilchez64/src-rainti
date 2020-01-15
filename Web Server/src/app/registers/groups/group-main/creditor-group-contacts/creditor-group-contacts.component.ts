import { Component, OnInit } from '@angular/core';
import { CreditorGroupContactsService } from '../creditor-group-services/creditor-group-contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-creditor-group-contacts',
  templateUrl: './creditor-group-contacts.component.html',
  styleUrls: ['./creditor-group-contacts.component.css']
})
export class CreditorGroupContactsComponent implements OnInit {

  searchText: ''
  name: ''
  creditorGroupContacts: Array<any> = []

  constructor(private _creditorGroupContactsService: CreditorGroupContactsService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.paramMap
    .subscribe(
      params => {
        this._creditorGroupContactsService.getCreditorGroupContacts(params.get('id'))
          .subscribe(      
            res => this.creditorGroupContacts = res,
            err => console.log(err)
          )
      }
    )    
  }

  addCreditorGroupContact(){
    this._route.paramMap
    .subscribe(
      params => {
        this._router.navigate(['/gestor-adicionar-contato/'+params.get('id')])           
      }
    )
  }

}