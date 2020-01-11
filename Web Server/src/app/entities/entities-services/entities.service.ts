import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {

  private _appServerConfig = require('../../../assets/configs/config-app-server.json')
  
  private _entitiesTypesUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/common/entities-types"
  
  constructor(private http: HttpClient) {  }
   

   getEntitiesTypes(){
    return this.http.get<any>(this._entitiesTypesUrl)
   }
}
