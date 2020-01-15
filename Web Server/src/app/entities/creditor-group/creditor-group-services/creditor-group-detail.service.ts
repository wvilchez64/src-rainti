import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditorGroupDetailService {

  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')

  private _entitiyUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor-group/creditors-group/"
  private _entitiyUpdateUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor-group/update-creditor-group/"
  private _entitiyDeleteUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor-group/delete-creditor-group/"

  constructor(private http: HttpClient) {  }

  getCreditorGroup(id){
    return this.http.get<any>(this._entitiyUrl+id)
   }

   updateCreditorGroup(user, id){
    return this.http.put<any>(this._entitiyUpdateUrl+id, user)
   }

   deleteCreditorGroup(user, id){
    return this.http.delete<any>(this._entitiyDeleteUrl+id, user)
   }
}
