
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../system-access-services/auth.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  //const word = (<any>jsonData).name;  
  

  resetUserData = {
    userId:'',
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

  constructor(private _auth: AuthService,
    private _router: Router,
    private _location: Location,
    private _route: ActivatedRoute) {
      
     }
  ngOnInit() {
    this._route.paramMap.subscribe(
      params => {
        this.resetUserData.userId = params.get('id')
      }
    )
  }

  resetUser(){
    this.resetUserData.resetCode = this.resetUserData.resetCode1 
                                  +this.resetUserData.resetCode2
                                  +this.resetUserData.resetCode3 
                                  +this.resetUserData.resetCode4 
                                  +this.resetUserData.resetCode5 
                                  +this.resetUserData.resetCode6 

    console.log(this.resetUserData)

     this._auth.resetUser(this.resetUserData)
      .subscribe(
        res => {
          console.log(res)
          if(res.returnCode < 3){
            console.log(res.response)
          }else{
            this._router.navigate(['/login'])          
          }          
        },
        error => console.log(error) 
        )       
  }
  backToEmailSender(){
    this._location.back()
  }

}
