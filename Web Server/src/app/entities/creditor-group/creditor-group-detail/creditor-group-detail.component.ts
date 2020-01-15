import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditorGroupDetailService } from '../creditor-group-services/creditor-group-detail.service';
import { CreditorGroupAddService } from '../creditor-group-services/creditor-group-add.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-creditor-group-detail',
  templateUrl: './creditor-group-detail.component.html',
  styleUrls: ['./creditor-group-detail.component.css']
})
export class CreditorGroupDetailComponent implements OnInit {

  creditorGroupData = {
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

  creditorGroupDataOld = {
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
  topicHasError = true
  dddHasError = true

  constructor(private route: ActivatedRoute,
    private _creditorGroupDetail: CreditorGroupDetailService,
    private _creditorGroupAddService: CreditorGroupAddService,
    private _location: Location ) { }

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }

  }

  ngOnInit() {
    
    this._creditorGroupAddService.getStates()
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
        this._creditorGroupDetail.getCreditorGroup(params.get('id'))
        .subscribe(
          res => {
            this.creditorGroupData = res[0]
            this.creditorGroupDataOld = res[0]          
          },
          err => {
            console.log(err)
          }
        )   
    }
      
    );
  }

  creditorGroupDataSender = {
    old : this.creditorGroupDataOld,
    new : this.creditorGroupData,
  }

  updateCreditorGroup(){

    this.route.paramMap
    .subscribe(
      params => {
        this._creditorGroupDetail.updateCreditorGroup(this.creditorGroupData, params.get('id'))
        .subscribe(
          res => {
            this._registerUpdated = 'Gestora atualizada com sucesso.'
            console.log(res)
          },
          err => {
            console.log(err)
          }
        )   
    }      
    );

  }

  deleteCreditorGroup(){
     this.route.paramMap
     .subscribe(
       params => {
         this._creditorGroupDetail.deleteCreditorGroup(this.creditorGroupData, params.get('id'))
         .subscribe(
           res => {
             console.log(res)
             this.backToCreditorGroup()
           },
          err => {
             console.log(err)
           }
         )   
       }  
     );
   }

  backToCreditorGroup(){
    this._location.back()
  }


}