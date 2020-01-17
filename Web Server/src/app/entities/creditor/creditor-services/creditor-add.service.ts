import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditorAddService {
  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')

  private _createCreditorUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor/create-creditor"
  private _statesUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/common/states"
  private _detransUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor/get-detrans"
  private _creditorsGroupUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor/get-creditors-group"

  constructor(private http: HttpClient,) { }

  getStates(){
    return this.http.get<any>(this._statesUrl)
  }

  getDetrans(){
    return this.http.get<any>(this._detransUrl)
  }

  getCreditorsGroup(){
    return this.http.get<any>(this._creditorsGroupUrl)
  }

  createCreditor(user){
    return this.http.post<any>(this._createCreditorUrl, user)
  }
  
}
