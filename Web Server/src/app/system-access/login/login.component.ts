import { Component, OnInit } from '@angular/core';
import { AuthService} from '../system-access-services/auth.service';
import { Router } from '@angular/router';
import { UserIdleService } from 'angular-user-idle';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    userName: '',
    password: '',
  }
  _errorMessage = ''

  constructor(private _auth: AuthService, 
    private _router: Router,
    private userIdle: UserIdleService) { }

  ngOnInit() {
    
  }

  loginUser(){

    this.stop()

    // Setting configs of watching tims is setted in seconds
    this.userIdle.setConfigValues({idle: 600/* 1 hour*/, timeout: 1, ping:120})
    
    this.userIdle.startWatching();
    
    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count => console.log(count));
    
    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => {
      localStorage.removeItem('token')
      this.stopWatching()
      this.stop()
      this.restart()
      this._router.navigate(['/login'])
    });


    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
         // console.log(res)
          localStorage.setItem('token',res.token)
          this._router.navigate(['/principal'])
        },
        error => {
          this._errorMessage = error.error 
          console.log(error)
        }
      )
  }

  stop() {
    this.userIdle.stopTimer();
  }
 
  stopWatching() {
    this.userIdle.stopWatching();
  }
 
  startWatching() {
    this.userIdle.startWatching();
  }
 
  restart() {
    this.userIdle.resetTimer();
  }

}
