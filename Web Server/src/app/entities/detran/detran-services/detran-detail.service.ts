import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetranDetailService {

  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')

  private _entitiyUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/detran/detrans/"
  private _entitiyUpdateUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/detran/update-detran/"

  constructor(private http: HttpClient) {  }

  getDetran(id){
    return this.http.get<any>(this._entitiyUrl+id)
   }

   updateDetran(user, id){
    return this.http.put<any>(this._entitiyUpdateUrl+id, user)
   }
}
