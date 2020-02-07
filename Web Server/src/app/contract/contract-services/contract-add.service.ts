import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractAddService {
  private _appServerConfig = require('../../../assets/configs/config-app-server.json')

  private _detransUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/contract-register/get-detrans"
  private _creditorsUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/contract-register/get-creditors"
  private _statesUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/common/states"
  private _alienTypesUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/contract-register/get-alien-types"
  private _indexesUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/contract-register/get-indexes"
  private _speciesUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/contract-register/get-species"
  private _yearsUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/contract-register/get-years"
  private _brandsUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/contract-register/get-brands"
  private _modelsUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/contract-register/get-models/"
  private _modelYearsUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/contract-register/get-modelYears/"
  private _createContractUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/contract-register/create-contract"
  
  constructor(private http: HttpClient) {  }
  
  getDetrans(){
    return this.http.get<any>(this._detransUrl)
  }

  getCreditors(){
  return this.http.get<any>(this._creditorsUrl)
  }

  getStates(){
    return this.http.get<any>(this._statesUrl)
  }

  getAlienTypes(){
    return this.http.get<any>(this._alienTypesUrl)
  }
  
  getIndexes(){
    return this.http.get<any>(this._indexesUrl)
  }

  getSpecies(){
    return this.http.get<any>(this._speciesUrl)
  }

  getYears(){
    return this.http.get<any>(this._yearsUrl)
  }
  
  getBrands(){
    return this.http.get<any>(this._brandsUrl)
  }
  
  getModels(id){
    return this.http.get<any>(this._modelsUrl+id)
  }

  getModelYears(modelId, brandId){
    return this.http.get<any>(this._modelYearsUrl+modelId+'\\'+brandId)
  }
 
  createContract(user){
    return this.http.post<any>(this._createContractUrl, user)
  }
  
}