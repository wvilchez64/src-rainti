import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstAccessService } from '../system-access-services/first-access.service';

@Component({
  selector: 'app-first-access',
  templateUrl: './first-access.component.html',
  styleUrls: ['./first-access.component.css']
})
export class FirstAccessComponent implements OnInit {

  _userData = {
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

  _passwordData = {
    userId: this._userData.userid,
    resetCode:'',
    password:'',
    confirmedPassword: '',
    resetCode1: '',
    resetCode2: '',
    resetCode3: '',
    resetCode4: '',
    resetCode5: '',
    resetCode6: '',
  }
 
  ngOnInit(){
    this._route.paramMap.subscribe(
      params => {
        this._firstAccessService.getUser(params.get('id'))
        .subscribe(
          res =>{
            this._userData = res[0]
            this._passwordData.userId = this._userData.userid
          },
          err =>{
            console.log(err)
          }
        )
      }
    )
  }

  updateUser(){
    this._passwordData.resetCode = 
                this._passwordData.resetCode1 
                +this._passwordData.resetCode2
                +this._passwordData.resetCode3 
                +this._passwordData.resetCode4 
                +this._passwordData.resetCode5 
                +this._passwordData.resetCode6 

    this._firstAccessService.updateUserPassword(this._passwordData)
    .subscribe(
      res =>{
        this._router.navigate(['/login'])
        console.log(res)
      },
      err =>{
        console.log(err)
      }

    )

  }

  constructor(private _route: ActivatedRoute,
    private _firstAccessService: FirstAccessService,
    private _router: Router) { }

}
