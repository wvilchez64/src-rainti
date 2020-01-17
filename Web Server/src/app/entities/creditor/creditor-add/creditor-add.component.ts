import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditorAddService } from '../creditor-services/creditor-add.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-creditor-add',
  templateUrl: './creditor-add.component.html',
  styleUrls: ['./creditor-add.component.css']
})
export class CreditorAddComponent implements OnInit {
  creditorData = {
    businessname: '',
    fantasyname: '',
    cnpj: '',
    dddnodel: '',
    phone: '',
    email: '',
    address: '',
    streetnumber: '',
    addresscomplement: '',
    district: '',
    county: '',
    topic: '',
    zipcode: '',
    contract: '',
    startdate: '',
    enddate: '',
    status: true,  
  }
  _errorMessage = ''
  _states : Array<any> = [] 
  _detrans : Array<any> = []
  _creditorsgroup : Array<any> = [] 
  topicHasError = true
  dddHasError = true

  constructor(private _creditorAddService: CreditorAddService,
    private _router: Router,
    private _location: Location) { }


  validateTopic(value) {
      if (value === 'default') {
        this.topicHasError = true;
      } else {
        this.topicHasError = false;
      }

  }
  ngOnInit() {
    this._creditorAddService.getStates()
    .subscribe(
      res => {
        this._states = res
      },
      error => {console.log(error)
                this._errorMessage = error.error }
      )
      this._creditorAddService.getDetrans()
      .subscribe(
        res => {
          console.log(res)
          this._detrans = res
        },
        error => {console.log(error)
                  this._errorMessage = error.error }
        )
      this._creditorAddService.getCreditorsGroup()
      .subscribe(
        res => {
          console.log(res)
          this._creditorsgroup = res;   
        },
        error => {console.log(error)
                  this._errorMessage = error.error }
        )  
  }

  createCreditor(){
    this._creditorAddService.createCreditor(this.creditorData)
      .subscribe(
        res => {
          this._router.navigate(['/credora'])
        },
        error => {console.log(error)
                  this._errorMessage = error.error }
        )  
    
  }
  backToCreditor(){
    this._location.back()
  }
}
