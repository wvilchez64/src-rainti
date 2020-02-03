import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GroupDetailService {

  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')

  
  private _userFeaturesUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-group-features/"
  private _userEntitiessUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-group-entities/"
  private _userGroupUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-groups/"
  private _userGroupUpdateUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-groups-update/"
  


  constructor(private http: HttpClient,) { }

  getUserGroupFeaturesById(id){
    return this.http.get<any>(this._userFeaturesUrl+id)
  }

  getUserGroupEntitiesByid(id){
    return this.http.get<any>(this._userEntitiessUrl+id)
  }

  getUserGroupByid(id){
    return this.http.get<any>(this._userGroupUrl+id)
  }

  updateGroup(id,userData){
    return this.http.put<any>(this._userGroupUpdateUrl+id, userData)
  }

}
