import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAddService {

  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')
  
  private _groupUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-groups-add"
  private _userUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-add"
  private _sendEmailUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/common/send-email"

  constructor(private http: HttpClient) {  }

  getUserGroups(){
    return this.http.get<any>(this._groupUrl)
   }

   createUser(userData){
    return this.http.post<any>(this._userUrl, userData)
   }

   sendEmail(user){
    return this.http.post<any>(this._sendEmailUrl, user)

  }
  
}
