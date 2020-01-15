import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditorGroupContactsService {

  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')
  
  private _creditorGroupContactsUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor-group/creditor-group-contacts/"

  constructor(private http: HttpClient) { }

  getCreditorGroupContacts(id){       
    return this.http.get<any>(this._creditorGroupContactsUrl+id)
  }
}