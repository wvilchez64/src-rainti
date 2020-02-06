import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserMainService {

  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')
  
  private _userUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-main"
  private _userDisableUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-disable"
  

  constructor(private http: HttpClient) {  }

  getUser(){
    return this.http.get<any>(this._userUrl)
   }

   disableUser(id){
    return this.http.put<any>(this._userDisableUrl,id)
   }
   
}
