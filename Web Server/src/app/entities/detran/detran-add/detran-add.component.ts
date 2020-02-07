import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetranAddService } from '../detran-services/detran-add.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-detran-add',
  templateUrl: './detran-add.component.html',
  styleUrls: ['./detran-add.component.css']
})
export class DetranAddComponent implements OnInit {  
  
 
  userData = {
    userName : '',
    cnpj : '',
    phone : '',
    email : '',
    topic : '',
    dddModel : ''
  }
  _errorMessage = ''
  _createdMessage = ''
  _states : Array<any> = [] 
  topicHasError = true
  dddHasError = true

  constructor(private _detranAddService: DetranAddService,
    private _router: Router,
    private _location: Location,
    private toastr: ToastrService,
    ) {       
      
    }

    validateTopic(value) {
      if (value === 'default') {
        this.topicHasError = true;
      } else {
        this.topicHasError = false;
      }
    }

  ngOnInit() {
    this._detranAddService.getStates()
    .subscribe(
      res => {
        console.log(res)
        this._states = res
      },
      error => {console.log(error)
                this._errorMessage = error.error
                this.toastr.error('Erro ao carregar estados, por favor recarregue a página.'); }
      )
  }

  createDetran(){
    this._detranAddService.createDetran(this.userData)
      .subscribe(
        res => {
          console.log(res)
          this.ngOnInit()
          this.toastr.success('Detran cadastrado com sucesso!');
          this.backToDetran()
          // Reset form to add another Detran
          //this.userData = {userName : '', cnpj : '', phone : '', email : '', topic : '', dddModel : '' } 
        },
        error => {console.log(error)
                  this._errorMessage = error.error
                  this.toastr.error('Erro ao carregar cadastrar Detran.'); }
        )      
  }

  backToDetran(){
    this._location.back()
  }

}
