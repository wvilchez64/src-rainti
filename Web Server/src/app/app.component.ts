import { Component, OnInit } from '@angular/core';
import { EntitiesService } from './entities.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent    implements OnInit {
    title = 'SRC - Sistema de Registro de Contrato';

    entityTypes: Array<any> = []    

    constructor(private _entitiesService: EntitiesService, private _authService: AuthService) { 
        
    }
  
    ngOnInit() {
      this._entitiesService.getEntitiesTypes()
      .subscribe(      
        res => this.entityTypes = res,
        err => console.log(err)
      ) 
    }     
}
