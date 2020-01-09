import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetranContactsService {

  private _detranContactsUrl = "http://localhost:3000/api/detran-contacts"

  constructor(private http: HttpClient) { }

  getDetranContacts(){
    return this.http.get<any>(this._detranContactsUrl)
  }
}
