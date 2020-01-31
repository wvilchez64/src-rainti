import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupMainService {

  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')
  
  private _groupUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-groups"
  private _disableGroupUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-groups-disable"
  

  constructor(private http: HttpClient) {  }

  getGroup(){
    return this.http.get<any>(this._groupUrl)
   }
   
   disableGroup(userData){
    return this.http.put<any>(this._disableGroupUrl, userData)
   }
}