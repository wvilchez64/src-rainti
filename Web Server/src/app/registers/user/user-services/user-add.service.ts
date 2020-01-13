import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAddService {

  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')

  private _createUserUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-add"
  private _showUserGroupsUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/show-user-groups"
  private _showUserEntitiesUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/show-user-entities"


  constructor(private http: HttpClient,) { }

  getUserGroups(){
    return this.http.get<any>(this._showUserGroupsUrl)
  }

  getUserEntities(){
    return this.http.get<any>(this._showUserEntitiesUrl)
  }


  createUser(user){
    return this.http.post<any>(this._createUserUrl, user)
  }
  
}
