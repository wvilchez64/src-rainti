import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupAddService {

  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')

  private _createGroupUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/group-add"
  private _userFeaturesUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-group-features"


  constructor(private http: HttpClient,) { }

  getUserGroupFeatures(){
    return this.http.get<any>(this._userFeaturesUrl)
  }

  createGroup(group){
    return this.http.post<any>(this._createGroupUrl, group)
  }
  
}
