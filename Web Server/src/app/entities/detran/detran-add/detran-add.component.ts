import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetranAddService } from '../detran-services/detran-add.service';
import { Location } from '@angular/common';

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
    private _location: Location) {       
      
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
                this._errorMessage = error.error }
      )
  }

  createDetran(){
    this._detranAddService.createDetran(this.userData)
      .subscribe(
        res => {
          console.log(res)
          this._createdMessage = 'Detran '+this.userData.userName+' cadastrado com sucesso!'
          // Reset form to add another Detran
          //this.userData = {userName : '', cnpj : '', phone : '', email : '', topic : '', dddModel : '' } 
        },
        error => {console.log(error)
                  this._errorMessage = error.error }
        )      
  }

  backToDetran(){
    this._location.back()
  }

}
