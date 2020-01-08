import { Component, OnInit } from '@angular/core';
import { EntitiesService } from './entities.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   implements OnInit {
  title = 'Web Server';


    entityTypes: Array<any> = []
  
    constructor(private _entitiesService: EntitiesService,
      private _router: Router) { 
        
      }
  
    ngOnInit() {
      this._entitiesService.getEntitiesTypes()
      .subscribe(      
        res => this.entityTypes = res,
        err => console.log(err)
      ) 
    }
}
