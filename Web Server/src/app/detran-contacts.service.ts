import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetranContactsService {

  private _appServerConfig = require('../assets/configs/config-app-server.json')
  
  private _detranContactsUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/detran-contacts"

  constructor(private http: HttpClient) { }

  getDetranContacts(){
    return this.http.get<any>(this._detranContactsUrl)
  }
}
