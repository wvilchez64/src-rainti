import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CreditorAddContactService } from '../creditor-services/creditor-add-contact.service';
import { ToastrService } from 'ngx-toastr'


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
              private _creditorAddContact: CreditorAddContactService,
              private toastr: ToastrService,
              ) { }

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
            this.toastr.success('Contato adicionado com sucesso!');
            this.backToCreditorContacts()
            
          
            
            // Reset form to add another contact
            //this.userData = {name: '',dddModel: '',phone: '',email: '',additionalInfo: '',}               
          },
          error => {console.log(error)
            this.toastr.error('Erro ao adicionar contato'); 
            
          }
        )   
    }
      
    );
  }

    backToCreditorContacts(){
      this._location.back()
    }

}