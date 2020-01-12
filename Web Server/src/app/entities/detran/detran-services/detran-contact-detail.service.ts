import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetranContactDetailService {

  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')
  
  private _detranContactByIdUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/detran/detran-contacts/contact/"
  private _detranUpdateContactByIdUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/detran/detran-contacts/update-contact/"
  private _detranDeleteContactByIdUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/detran/detran-contacts/delete-contact/"

  constructor(private http: HttpClient) { }

  getDetranContactById(id){
    return this.http.get<any>(this._detranContactByIdUrl+id)
  }

  updateDetranContactById(id, user){
    return this.http.put<any>(this._detranUpdateContactByIdUrl+id, user)
  }

  deleteDetranContactById(id){
    return this.http.delete<any>(this._detranDeleteContactByIdUrl+id)
  }

}
