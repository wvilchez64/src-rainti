import { Component, OnInit } from '@angular/core';
import { EntitiesService } from '../entities/entities-services/entities.service';
import { Router } from '@angular/router';
import { AuthService } from "../system-access/system-access-services/auth.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  entityTypes: Array<any> = []
  
    constructor(private _entitiesService: EntitiesService,
      private _router: Router,
      private _authService: AuthService
      ) { }

      ngOnInit() {
        this._entitiesService.getEntitiesTypes()
          .subscribe(      
            res => this.entityTypes = res,
            err => console.log(err)
          ) 
      }
       

}
