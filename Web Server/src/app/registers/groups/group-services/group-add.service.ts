import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupAddService {

  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')

  private _createGroupUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/group-add"
  private _featuresUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/show-features-group"


  constructor(private http: HttpClient,) { }

  getUserGroupFeatures(){
    return this.http.get<any>(this._featuresUrl)
  }

  createGroup(group){
    return this.http.post<any>(this._createGroupUrl, group)
  }
  
}
