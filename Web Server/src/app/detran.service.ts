import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetranService {

  private _appServerConfig = require('../assets/configs/config-app-server.json')

  private _statesUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/detran/states-detran-add"

  constructor(private http: HttpClient) { }

  getStates(){
    return this.http.get<any>(this._statesUrl)
  }
}

