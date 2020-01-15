import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditorGroupContactDetailService {

  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')
  
  private _creditorGroupContactByIdUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor-group/creditor-group-contacts/contact/"
  private _creditorGroupUpdateContactByIdUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor-group/creditor-group-contacts/update-contact/"
  private _creditorGroupDeleteContactByIdUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor-group/creditor-group-contacts/delete-contact/"

  constructor(private http: HttpClient) { }

  getCreditorGroupContactById(id){
    return this.http.get<any>(this._creditorGroupContactByIdUrl+id)
  }

  updateCreditorGroupContactById(id, user){
    return this.http.put<any>(this._creditorGroupUpdateContactByIdUrl+id, user)
  }

  deleteCreditorGroupContactById(id){
    return this.http.delete<any>(this._creditorGroupDeleteContactByIdUrl+id)
  }

}