import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _appServerConfig = require('../assets/configs/config-app-server.json')

  private _registerUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/register"
  private _loginUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/login"
  private _recoverPasswordUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/recover-password"
  private _resetPasswordUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/reset-password"
  private _sendEmailUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/send-email"
  private _createDetranUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/create-detran"
  private _statesUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/states"
  
  constructor(private http: HttpClient, private _router: Router) {}

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }

  resetUser(user){
    return this.http.post<any>(this._resetPasswordUrl, user)
  }

  createDetran(user){
    return this.http.post<any>(this._createDetranUrl, user)
  }
  
  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
        .pipe(catchError(this.errorHandler))
  }  

  errorHandler(error: HttpErrorResponse){
    return throwError(error)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }
 
  getToken(){
    return localStorage.getItem('token')
  }

  getStates(){
    return this.http.get<any>(this._statesUrl)
  }

  recoverPassword(user){
    return this.http.post<any>(this._recoverPasswordUrl, user)
  }

  sendEmail(user){
    return this.http.post<any>(this._sendEmailUrl, user)

  }
}
