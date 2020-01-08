import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private _specialEventsUrl = "http://localhost:3000/api/special"
  private _eventsUrl = "http://localhost:3000/api/events"
  
  constructor(private http: HttpClient) {}

  getEvents(){
    return this.http.get<any>(this._eventsUrl)
  }

  getSpecialEvents(){
    return this.http.get<any>(this._specialEventsUrl)
  }

}
