import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private _appServerConfig = require('../assets/configs/config-app-server.json')

  private _userFeaturesUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/login/access-features"

  constructor(private http: HttpClient,) { }

  getUserGroupFeatures(){
    return this.http.get<any>(this._userFeaturesUrl)
  }
}
