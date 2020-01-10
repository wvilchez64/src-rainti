import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetranAddService {

  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')

  private _createDetranUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/create-detran"
  private _statesUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/states-detran-add"

  constructor(private http: HttpClient,) { }

  getStates(){
    return this.http.get<any>(this._statesUrl)
  }

  createDetran(user){
    return this.http.post<any>(this._createDetranUrl, user)
  }
}
