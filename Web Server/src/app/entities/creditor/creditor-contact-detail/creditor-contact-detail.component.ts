import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CreditorContactDetailService } from '../creditor-services/creditor-contact-detail.service';

@Component({
  selector: 'app-creditor-contact-detail',
  templateUrl: './creditor-contact-detail.component.html',
  styleUrls: ['./creditor-contact-detail.component.css']
})
export class CreditorContactDetailComponent implements OnInit {

  userData = {
    name: '',
    dddmodel: '',
    phone: '',
    email: '',
    additionalinfo: '',
  }
  _updatedMessage = ''
  constructor(private _location: Location,
              private _route: ActivatedRoute,
              private _creditorContactDetail: CreditorContactDetailService ) { }

  ngOnInit() {
    this._route.paramMap
    .subscribe(
      params => {
        this._creditorContactDetail.getCreditorContactById(params.get('id'))
        .subscribe(
          res => {
            console.log(res[0])
            this.userData = res[0]
          },
          err => {
            console.log(err)
          }
        )   
    }      
    );
  }

  updateCreditorContactById(){
    this._route.paramMap
    .subscribe(
      params => {
        this._creditorContactDetail.updateCreditorContactById(params.get('id'),this.userData)
        .subscribe(
          res => {
            console.log(res)
            this._updatedMessage = 'Dados de contato alterados com sucesso'
          },
          err => {
            console.log(err)
          }
        )   
    }      
    );
  }

  deleteCreditorContactById(){
    this._route.paramMap
    .subscribe(
      params => {
        this._creditorContactDetail.deleteCreditorContactById(params.get('id'))
        .subscribe(
          res => {
            console.log(res)
            this.backToCreditorContacts()
          },
          err => {
            console.log(err)
          }
        )   
    }      
    );
  }

  backToCreditorContacts(){
    this._location.back()
  }

}