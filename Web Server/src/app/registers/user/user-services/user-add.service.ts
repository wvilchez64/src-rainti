import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAddService {

  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')
  
  private _groupUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-groups-add"
  private _userUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-add"
  

  constructor(private http: HttpClient) {  }

  getUserGroups(){
    return this.http.get<any>(this._groupUrl)
   }

   createUser(userData){
    return this.http.post<any>(this._userUrl, userData)
   }

  
}
