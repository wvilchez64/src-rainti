import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {

  private _entitiesUrl = "http://localhost:3000/api/entities"
  private _entitiesTypesUrl = "http://localhost:3000/api/entities-types"
  
  constructor(private http: HttpClient) {  }

   getDetrans(){
    return this.http.get<any>(this._entitiesUrl)
   }

   getEntitiesTypes(){
    return this.http.get<any>(this._entitiesTypesUrl)
   }
}
