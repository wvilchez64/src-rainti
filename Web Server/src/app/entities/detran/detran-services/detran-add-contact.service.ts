import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetranAddContactService {

  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')

  private _addDetranContactUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/detran/add-detran-contact/"

  constructor(private http: HttpClient,) { }
  
  addDetranContact(id, user){
    return this.http.post<any>(this._addDetranContactUrl+id,user)

  }
}
