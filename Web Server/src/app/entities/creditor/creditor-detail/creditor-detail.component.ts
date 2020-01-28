import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditorDetailService } from '../creditor-services/creditor-detail.service';
import { Location } from '@angular/common';
import { R3TargetBinder } from '@angular/compiler';

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
    entities: []
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
    entities: []
  }

  _registerUpdated = ''
  _errorMessage = ''
  _states : Array<any> = []
  _detrans : Array<any> = []
  _creditorsgroup : Array<any> = [] 
  topicHasError = true
  dddHasError = true
  entities : Array<any> = [] 

  constructor(private route: ActivatedRoute,
    private _creditorDetail: CreditorDetailService,
    private _location: Location ) { }

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }

  }

  ngOnInit() {
    
    this._creditorDetail.getStates()
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
      }
    )

    this.route.paramMap
    .subscribe(
      params => {
        this._creditorDetail.getDetrans(params.get('id'))
        .subscribe(
          res => {
              console.log(res)
              this._detrans = res
            },
            error => {console.log(error)
                      this._errorMessage = error.error 
            }
        )   
      }
    )
    
    this.route.paramMap
    .subscribe(
      params => {
        this._creditorDetail.getCreditorsGroup(params.get('id'))
        .subscribe(
          res => {
            console.log(res)
            this._creditorsgroup = res;   
          },
          error => {console.log(error)
                    this._errorMessage = error.error
            }
        )   
      }
    )
  }


  creditorDataSender = {
    old : this.creditorDataOld,
    new : this.creditorData,
  }

  checkAllOptions() {
    if (this._detrans.every(val => val.checked == true))
       this._detrans.forEach(val => { val.checked = false });
    else
      this._detrans.forEach(val => { val.checked = true });
  }

  uncheckAllOptions() {
    this._creditorsgroup.forEach(val => { val.checked = false });
  }

  checkDetransChange(e) {
    this._detrans.forEach(val => { 
      if (e.target.id == val.id) {
        val.checked = e.target.checked;
      }; 
    });
  }

  checkCreditorsGroupChange(e) {
    this._creditorsgroup.forEach(val => { 
      if (e.target.id == val.id) {
        val.checked = e.target.checked;
      } else {
        val.checked = !e.target.checked;
      }; 
    });
  }

  entitiesCheck() {
    this.entities = []
    this._detrans.forEach(val => {      
      if (val.checked) {
        this.entities.push(val.id)
      }
    });
    this._creditorsgroup.forEach(val => { 
      if (val.checked) {
        this.entities.push(val.id)
      }
    });
    this.creditorData.entities = this.entities;
  }

  updateCreditor(){
    this.entitiesCheck()
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