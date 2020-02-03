import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupAddService {

  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')

  private _createGroupUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-group-add"
  private _userFeaturesUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-group-features"
  private _userEntitiesUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-group-entities"


  constructor(private http: HttpClient,) { }

  getUserGroupFeatures(){
    return this.http.get<any>(this._userFeaturesUrl)
  }

  getUserGroupEntities(){
    return this.http.get<any>(this._userEntitiesUrl)
  }

  createGroup(group){
    return this.http.post<any>(this._createGroupUrl, group)
  }
  
}
