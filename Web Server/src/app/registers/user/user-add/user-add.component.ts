import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAddService } from '../user-services/user-add.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

    registerUserData = {
    firstName: '',
    lastName: '', 
    userName: '',
    dddModel: '',
    phone: '',
    cpf: '',
    status: true,
    email: '',
    groupsId: '',

  }

  _errorMessage = ''
  _groupsData : Array<any> = []
  topicHasError = true
  dddHasError = true

  _activeTab = 'user-data'

  constructor(private _userAddService: UserAddService,
    private _router: Router,
    private _location: Location) { }

    ngOnInit() {
      this._userAddService.getUserGroups()
      .subscribe(
        res => {
          console.log(res)
          this._groupsData = res
        },
        error => {  console.log(error)
                  this._errorMessage = error.error }
        )
    }


  nextTab(tab){
    this._activeTab = tab
  }
  
  featuresControl(event) {
    this.registerUserData.groupsId = event.target.id
  }
   
  createUser(){
     this._userAddService.createUser(this.registerUserData)
       .subscribe(
         res => {
           console.log(res)
           
         },
         error => console.log(error) 
         )  
     
   } 

  backToUsers(){
    this._location.back()
  }
  
}
