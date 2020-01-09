import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {

  private _appServerConfig = require('../../../assets/configs/config-app-server.json')
  
  private _entitiesUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/entities"
  private _entitiyUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/entity/"
  private _entitiesTypesUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/entities-types"
  
  constructor(private http: HttpClient) {  }

   getDetrans(){
    return this.http.get<any>(this._entitiesUrl)
   }

   getDetran(id){
    return this.http.get<any>(this._entitiyUrl+id)
   }

   getEntitiesTypes(){
    return this.http.get<any>(this._entitiesTypesUrl)
   }
}
