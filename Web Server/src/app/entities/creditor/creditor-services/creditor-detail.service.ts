import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditorDetailService {

  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')

  private _statesUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/common/states"
  private _entitiyUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor/creditors/"
  private _entitiyUpdateUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor/update-creditor/"
  private _entitiyDeleteUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor/delete-creditor/"
  private _detransUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor/get-detrans/"
  private _creditorsGroupUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor/get-creditors-group/"
  
  constructor(private http: HttpClient) {  }

  getStates(){
    return this.http.get<any>(this._statesUrl)
  }

  getCreditor(id){
    return this.http.get<any>(this._entitiyUrl+id)
   }

  getDetrans(id){
    return this.http.get<any>(this._detransUrl+id)
  }

  getCreditorsGroup(id){
    return this.http.get<any>(this._creditorsGroupUrl+id)
  }

  updateCreditor(user, id){
  return this.http.put<any>(this._entitiyUpdateUrl+id, user)
  }

  deleteCreditor(user, id){
  return this.http.delete<any>(this._entitiyDeleteUrl+id, user)
  }
}
