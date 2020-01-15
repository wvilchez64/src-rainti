import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditorContactDetailService {

  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')
  
  private _creditorContactByIdUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor/creditor-contacts/contact/"
  private _creditorUpdateContactByIdUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor/creditor-contacts/update-contact/"
  private _creditorDeleteContactByIdUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor/creditor-contacts/delete-contact/"

  constructor(private http: HttpClient) { }

  getCreditorContactById(id){
    return this.http.get<any>(this._creditorContactByIdUrl+id)
  }

  updateCreditorContactById(id, user){
    return this.http.put<any>(this._creditorUpdateContactByIdUrl+id, user)
  }

  deleteCreditorContactById(id){
    return this.http.delete<any>(this._creditorDeleteContactByIdUrl+id)
  }

}