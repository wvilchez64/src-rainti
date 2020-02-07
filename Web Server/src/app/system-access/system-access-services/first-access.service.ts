import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirstAccessService {

  private _appServerConfig = require('../../../assets/configs/config-app-server.json')

  private _userUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-first-access/"
  private _userUpdateUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/user-first-access-update"
  
  constructor(private http: HttpClient, private _router: Router) {}

  getUser(id){
    return this.http.get<any>(this. _userUrl+id)
  }

  updateUserPassword(userData){
    return this.http.put<any>(this. _userUpdateUrl, userData)
  }
}
