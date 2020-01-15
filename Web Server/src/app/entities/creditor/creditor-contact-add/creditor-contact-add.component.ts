import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CreditorAddContactService } from '../creditor-services/creditor-add-contact.service';


@Component({
  selector: 'app-creditor-contact-add',
  templateUrl: './creditor-contact-add.component.html',
  styleUrls: ['./creditor-contact-add.component.css']
})
export class CreditorContactAddComponent implements OnInit {

  userData = {
    name: '',
    dddModel: '',
    phone: '',
    email: '',
    additionalInfo: '',
  }
  _createdMessage =''
  _errorMessage = ''

  constructor(private _location: Location,
              private _route: ActivatedRoute,
              private _creditorAddContact: CreditorAddContactService ) { }

  ngOnInit() {
    
  }

  addCreditorContact(){
    this._route.paramMap
    .subscribe(
      params => {   
        this._creditorAddContact.addCreditorContact(params.get('id'), this.userData)
        .subscribe(
          res => {
            console.log(res)
            this._createdMessage = 'Contato '+this.userData.name+' adicionado com sucesso!'
            
            // Reset form to add another contact
            //this.userData = {name: '',dddModel: '',phone: '',email: '',additionalInfo: '',}               
          },
          error => {console.log(error)
            this._errorMessage = error.error 
          }
        )   
    }
      
    );
  }

  backToCreditorContacts(){
    this._location.back()
  }

}