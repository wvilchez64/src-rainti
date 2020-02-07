import { Component, OnInit } from '@angular/core';
import { UserAddService } from '../user-services/user-add.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDetailService } from '../user-services/user-detail.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  
  _registerUserData = {
    userid:'',
    firstname: '',
    lastname: '', 
    username: '',
    ddd: '',
    phone: '',
    cpf: '',
    status: true,
    email: '',
    groupsid: '',
    registration: '',

  }

  _errorMessage = ''
  _groupsData : Array<any> = []
  topicHasError = true
  dddHasError = true

  _activeTab = 'user-data'

  constructor(private _userDetailService: UserDetailService,
    private _route: ActivatedRoute,
    private _location: Location) { }

    ngOnInit() {

      this._route.paramMap
      .subscribe(
        params => {
          this._registerUserData.userid = params.get('id')
        },
        err => {

        }
      )
      this._userDetailService.getUserDetail(this._registerUserData.userid)
      .subscribe(
        res => {
          
          this._registerUserData = res[0]    

        },
        err =>{
          console.log(err)
        }
      )

      this._userDetailService.getUserGroups(this._registerUserData.userid)
      .subscribe(
        res => {              
          this._groupsData = res
          this._groupsData.forEach( val => { 
            
            if(val.id == this._registerUserData.groupsid){
              val.checked = true
            }
          })
          
        },
        error => {  console.log(error)
                  this._errorMessage = error.error }
        )
      
    }


  nextTab(tab){
    this._activeTab = tab
  }
  
  featuresControl(event) {
    
    this._registerUserData.groupsid = event.target.id
  }
   
  updateUser(){
     this._userDetailService.updateUser(this._registerUserData.userid, this._registerUserData)
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
