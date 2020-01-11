
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../system-access-services/auth.service';


@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  //const word = (<any>jsonData).name;  
  

  resetUserData = {
    userName:'',
    resetCode:'',
    password:'',
    confirmedPassword: '',
  }

  constructor(private _auth: AuthService,
    private _router: Router) {
      
     }
  ngOnInit() {
  }

  resetUser(){
    this._auth.resetUser(this.resetUserData)
      .subscribe(
        res => {
          console.log(res)
          this._router.navigate(['/login'])          
        },
        error => console.log(error) 
        )      
  }

}
