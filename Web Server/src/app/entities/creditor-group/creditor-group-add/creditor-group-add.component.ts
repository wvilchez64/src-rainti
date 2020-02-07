import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditorGroupAddService } from '../creditor-group-services/creditor-group-add.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr'


@Component({
  selector: 'app-creditor-add',
  templateUrl: './creditor-group-add.component.html',
  styleUrls: ['./creditor-group-add.component.css']
})
export class CreditorGroupAddComponent implements OnInit {
  creditorGroupData = {
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
  topicHasError = true
  dddHasError = true
  activeTab = "nav-home"
  
  constructor(private _creditorGroupAddService: CreditorGroupAddService,
    private _router: Router,
    private _location: Location,
    private toastr: ToastrService,
    ) { }

    
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
                this._errorMessage = error.error
                this.toastr.error('Erro ao carregar as estados, por favor recarregue a página.');   }
      )
  }

  nextTab(activeTab) {
    this.activeTab = activeTab;
  }

  createCreditorGroup(){
    this._creditorGroupAddService.createCreditorGroup(this.creditorGroupData)
      .subscribe(
        res => {
          this.toastr.success('Gestora criada com sucesso!');  
          this._router.navigate(['/gestora'])
        },
        error => {console.log(error)
                  this._errorMessage = error.error
                  this.toastr.error('Erro ao criar gestora.');  
                 }
        )  
    
  }
  backToCreditorGroup(){
    this._location.back()
  }
}
