import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CreditorGroupAddContactService } from '../creditor-group-services/creditor-group-add-contact.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-creditor-group-contact-add',
  templateUrl: './creditor-group-contact-add.component.html',
  styleUrls: ['./creditor-group-contact-add.component.css']
})
export class CreditorGroupContactAddComponent implements OnInit {

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
              private _creditorGroupAddContact: CreditorGroupAddContactService,
              private toastr: ToastrService,
               ) { }

  ngOnInit() {
    
  }

 
  addCreditorGroupContact(){ 
    this._route.paramMap
    .subscribe(
      params => {   
        this._creditorGroupAddContact.addCreditorGroupContact(params.get('id'), this.userData)
        .subscribe(
          res => {
            console.log(res)
            this.toastr.success('Contato adicionado com sucesso!');
            this.backToCreditorGroupContacts();
            
            // Reset form to add another contact
            //this.userData = {name: '',dddModel: '',phone: '',email: '',additionalInfo: '',}               
          },
          error => {console.log(error)
            this._errorMessage = error.error 
            this.toastr.error('Erro ao criar contato.');
          }
        )   
    }
      
    );
  }

  backToCreditorGroupContacts(){
    this._location.back()
  }

}