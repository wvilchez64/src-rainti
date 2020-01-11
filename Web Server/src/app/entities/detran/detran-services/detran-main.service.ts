import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetranMainService {
  
  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')
  
  private _entitiesUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/detran/detrans"
  

  constructor(private http: HttpClient) {  }

  getDetrans(){
    return this.http.get<any>(this._entitiesUrl)
   }

   
}
