import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAddService } from '../user-services/user-add.service';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

    registerUserData = {
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
    confirmedPassword: '',
    userGroup: '',
    userEntities: '',

  }

  _errorMessage = ''
  _groups : Array<any> = []
  _entities : Array<any> = [] 
  topicHasError = true
  dddHasError = true

  constructor(private _userAddService: UserAddService,
    private _router: Router) { }


    validateTopic(value) {
      if (value === 'default') {
        this.topicHasError = true;
      } else {
        this.topicHasError = false;
      }
    }


    ngOnInit() {
      this._userAddService.getUserGroups()
      .subscribe(
        res => {
          console.log(res)
          this._groups = res
        },
        error => {console.log(error)
                  this._errorMessage = error.error }
        )

        this._userAddService.getUserEntities()
        .subscribe(
          res => {
            console.log(res)
            this._entities = res
          },
          error => {console.log(error)
                    this._errorMessage = error.error }
          )
    }

  CreateUser(){
    this._userAddService.createUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res)
          this._router.navigate(['/user-main'])
        },
        error => console.log(error) 
        )  
    
  }
}
