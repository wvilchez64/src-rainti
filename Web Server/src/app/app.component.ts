import { Component, OnInit, Input } from '@angular/core';
import { EntitiesService } from './entities/entities-services/entities.service';
import { AuthService } from './system-access/system-access-services/auth.service';
import { Router } from '@angular/router';
import { DetranService } from './detran.service';
import { NgbModal, NgbActiveModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent    implements OnInit {
    title = 'SRC - Sistema de Registro de Contrato';

    entityTypes: Array<any> = []   

    detranAllowed = ''

    constructor(private _entitiesService: EntitiesService, 
      public _authService: AuthService,
      public _router: Router,
      public _detranService: DetranService,
      private _modalService: NgbModal,
      private _config: NgbModalConfig) {
        _config.backdrop = 'static';
        _config.keyboard = false;
        
    } 

    
    ngOnInit() {
      this._entitiesService.getEntitiesTypes()
      .subscribe(      
        res => this.entityTypes = res,
        err => console.log(err)
      ) 
    }  

    checkDetranAvaiability(content){
      this._detranService.getStates()
      .subscribe( 
        res => {
          if(res.length == 0){            
            this._modalService.open(content)  
          }else{
            this._router.navigate(["/detran-adicionar"])
          }
          
      },
      err =>{
        console.log(err)
      }        
      )     
    }   
}

