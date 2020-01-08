import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register"
  private _loginUrl = "http://localhost:3000/api/login"
  private _recoverPasswordUrl = "http://localhost:3000/api/recover-password"
  private _resetPasswordUrl = "http://localhost:3000/api/reset-password"
  private _sendEmailUrl = "http://localhost:3000/api/send-email"
  
  constructor(private http: HttpClient) {}

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }

  resetUser(user){
    return this.http.post<any>(this._resetPasswordUrl, user)
  }
  
  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }  

  loggedIn(){
    return !!localStorage.getItem('token')
  }
 
  getToken(){
    return localStorage.getItem('token')
  }

  recoverPassword(user){
    return this.http.post<any>(this._recoverPasswordUrl, user)
  }

  sendEmail(user){
    return this.http.post<any>(this._sendEmailUrl, user)

  }
}
