import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractServicesService {
  
  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')

  private _createContractUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/contract/contracts-add"
  private _showContractsUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/administration/show-contract"


  constructor(private http: HttpClient,) { }

 
  createContract(contract){
    return this.http.post<any>(this._createContractUrl, contract)
  }
  
  getContracts(){
    return this.http.get<any>(this._showContractsUrl)
  }

  

}