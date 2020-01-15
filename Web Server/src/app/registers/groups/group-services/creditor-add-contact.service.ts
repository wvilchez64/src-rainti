import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditorAddContactService {

  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')

  private _addCreditorContactUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor/add-creditor-contact/"

  constructor(private http: HttpClient,) { }
  
  addCreditorContact(id, user){  
    return this.http.post<any>(this._addCreditorContactUrl+id,user)

  }
}