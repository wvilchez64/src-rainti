import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditorGroupMainService {
  
  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')
  
  private _entitiesUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor-group/creditors-group"
  

  constructor(private http: HttpClient) {  }

  getCreditorsGroup(){
    return this.http.get<any>(this._entitiesUrl)
   }

  }