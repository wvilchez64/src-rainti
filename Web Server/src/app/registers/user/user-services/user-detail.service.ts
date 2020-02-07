import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')
  
  private _groupUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-detail-groups/"
  private _userUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-detail/"
  private _userUpdateUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-update/"
  private _userDeleteUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-delete"
  

  constructor(private http: HttpClient) {  }

  getUserGroups(id){
    return this.http.get<any>(this._groupUrl+id)
   }

  getUserDetail(id){
  return this.http.get<any>(this._userUrl+id)
  }

  updateUser(id,userData){
  return this.http.put<any>(this._userUpdateUrl+id, userData)
  }

  deleteUser(userData){
    return this.http.put<any>(this._userDeleteUrl, userData)
    }


}
