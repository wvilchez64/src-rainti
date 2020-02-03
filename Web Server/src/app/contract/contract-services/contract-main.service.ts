import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractMainService {
  
  private _appServerConfig = require('../../../assets/configs/config-app-server.json')
  
  private _contractsUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/contract-register/contracts"

  constructor(private http: HttpClient) {  }

  getContracts(){
    return this.http.get<any>(this._contractsUrl)
   }
}
