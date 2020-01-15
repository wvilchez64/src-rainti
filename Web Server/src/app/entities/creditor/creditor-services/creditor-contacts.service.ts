import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditorContactsService {

  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')
  
  private _creditorContactsUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor/creditor-contacts/"

  constructor(private http: HttpClient) { }

  getCreditorContacts(id){       
    return this.http.get<any>(this._creditorContactsUrl+id)
  }
}