import { Component, OnInit } from '@angular/core';
import { AuthService} from '../system-access-services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
    confirmedPassword: '',

  }

  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }

  registerUser(){
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res)
          this._router.navigate(['/login'])
        },
        error => console.log(error) 
        )  
    
  }

}
