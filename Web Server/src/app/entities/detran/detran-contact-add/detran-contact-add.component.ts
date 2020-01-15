import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DetranAddContactService } from '../detran-services/detran-add-contact.service';


@Component({
  selector: 'app-detran-contact-add',
  templateUrl: './detran-contact-add.component.html',
  styleUrls: ['./detran-contact-add.component.css']
})
export class DetranContactAddComponent implements OnInit {

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
              private _detranAddContact: DetranAddContactService ) { }

  ngOnInit() {
    
  }

  addDetranContact(){
    this._route.paramMap
    .subscribe(
      params => {
        this._detranAddContact.addDetranContact(params.get('id'), this.userData)
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

  backToDetranContacts(){
    this._location.back()
  }

}
