import { Component, OnInit } from '@angular/core';
import { UserAddService } from '../../user-services/user-add.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDetailService } from '../../user-services/user-detail.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  
  registerUserData = {
    userId:'',
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

  constructor(private _userDetailService: UserDetailService,
    private _route: ActivatedRoute) { }

    ngOnInit() {

      this._route.paramMap
      .subscribe(
        params => {
          this.registerUserData.userId = params.get('id')
        },
        err => {

        }
      )
      this._userDetailService.getUserDetail(this.registerUserData.userId)
      .subscribe(
        res => {
          console.log(res)
          this.registerUserData = res

        },
        err =>{
          console.log(err)
        }
      )

      this._userDetailService.getUserGroups(this.registerUserData.userId)
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
   
  updateUser(){
     this._userDetailService.updateUser(this.registerUserData.userId, this.registerUserData)
       .subscribe(
         res => {
           console.log(res)
           
         },
         error => console.log(error) 
         )  
     
   } 

  backToUsers(){

  }


}
