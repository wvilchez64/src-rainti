import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditorDetailService } from '../creditor-services/creditor-detail.service';
import { CreditorAddService } from '../creditor-services/creditor-add.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-creditor-detail',
  templateUrl: './creditor-detail.component.html',
  styleUrls: ['./creditor-detail.component.css']
})
export class CreditorDetailComponent implements OnInit {

  creditorData = {
    businessname: '',
    fantasyname: '',
    cnpj: '',
    dddmodel: '',
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

  creditorDataOld = {
    businessname: '',
    fantasyname: '',
    cnpj: '',
    dddmodel: '',
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

  _registerUpdated = ''
  _errorMessage = ''
  _states : Array<any> = []
  _detrans : Array<any> = []
  _creditorsgroup : Array<any> = [] 
  topicHasError = true
  dddHasError = true

  constructor(private route: ActivatedRoute,
    private _creditorDetail: CreditorDetailService,
    private _creditorAddService: CreditorAddService,
    private _location: Location ) { }

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

    this.route.paramMap
    .subscribe(
      params => {
        this._creditorDetail.getCreditor(params.get('id'))
        .subscribe(
          res => {
            this.creditorData = res[0]
            this.creditorDataOld = res[0]          
          },
          err => {
            console.log(err)
          }
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
      
    );
  }

  creditorDataSender = {
    old : this.creditorDataOld,
    new : this.creditorData,
  }

  
  checkAllOptions() {
    this._creditorsgroup.forEach(val => { val.checked = true });
  }

  uncheckAllOptions() {
    this._creditorsgroup.forEach(val => { val.checked = false });
  }

  uncheckOthersOptions(id) {
    console.log(id)

    var action = false;
    this._creditorsgroup.forEach(val => {
      action = false;
      if (val.id == id) {
        action = true;
      }  
      val.checked = action
    })

    console.log('after', this._creditorsgroup);
  }

  updateCreditor(){

    this.route.paramMap
    .subscribe(
      params => {
        this._creditorDetail.updateCreditor(this.creditorData, params.get('id'))
        .subscribe(
          res => {
            this._registerUpdated = 'Credora atualizada com sucesso.'
            console.log(res)
          },
          err => {
            console.log(err)
          }
        )   
    }      
    );

  }

  deleteCreditor(){
     this.route.paramMap
     .subscribe(
       params => {
         this._creditorDetail.deleteCreditor(this.creditorData, params.get('id'))
         .subscribe(
           res => {
             console.log(res)
             this.backToCreditor()
           },
          err => {
             console.log(err)
           }
         )   
       }  
     );
   }

  backToCreditor(){
    this._location.back()
  }


}