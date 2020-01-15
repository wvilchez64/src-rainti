import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditorGroupAddContactService {

  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')

  private _addCreditorGroupContactUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor-group/add-creditor-group-contact/"

  constructor(private http: HttpClient,) { }
  
  addCreditorGroupContact(id, user){  
    return this.http.post<any>(this._addCreditorGroupContactUrl+id,user)

  }
}
