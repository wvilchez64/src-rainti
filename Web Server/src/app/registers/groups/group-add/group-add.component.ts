import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupAddService } from '../group-services/group-add.service';
import { UserAddService } from '../../user/user-services/user-add.service';


@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.css']
})
export class GroupAddComponent implements OnInit {

  _groupData = {
    planname : '',
    entityid : {},
    features: {},
  }

  _detranGroupData = {
    features: [],
  }

  addDetran(event){
    
    this._detranGroupData.features.push(event.target.id)
    console.log(this._detranGroupData.features)

  }
  
  _errorMessage = ''

  _entitiesDetran: Array<any> = []
  _entitiesCreditor: Array<any> = [] 
  _entitiesCreditorGroup: Array<any> = [] 
  _entitiesAdmin: Array<any> = [] 
  _entitiesRegistrar: Array<any> = []

  _featuresDetran: Array<any> = []
  _featuresCreditor: Array<any> = [] 
  _featuresCreditorGroup: Array<any> = [] 
  _featuresAdmin: Array<any> = [] 
  _featuresRegistrar: Array<any> = []
  
  _detranSwitch = true
  _creditorSwitch = true
  _creditorGroupSwitch = true
  _adminSwitch = true

  constructor(private _groupAddService: GroupAddService,
    ) {  }

  

    ngOnInit() {

        this._groupAddService.getUserGroupFeatures()
        .subscribe(
          res => {
            console.log(res) 
            res.forEach((data) => {              
              if(data.entitytype == 'DETRAN'){ // Type Detran
                this._featuresDetran.push(data)
              } else if(data.entitytype == 'CREDORA'){ // Type Creditor
                this._featuresCreditor.push(data)
              } else if( data.entitytype == 'GESTORA'){ // Type Creditor Group
                this._featuresCreditorGroup.push(data)
              } else if( data.entitytype == 'ADMIN'){ // Type Admin
                this._featuresAdmin.push(data)
              }else if( data.entitytype == 'REGISTRADORA'){ // Type Registrar
                this._featuresRegistrar.push(data)
              }
            })
          },
          error => {console.log(error)
                    this._errorMessage = error.error }
          )     
          
          this._groupAddService.getUserGroupEntities()
        .subscribe(
          res => {
            console.log(res) 
            this._entitiesAdmin = res
            this._entitiesAdmin.forEach((data) => {              
              if(data.entitytype == 'DETRAN'){ // Type Detran
                this._entitiesDetran.push(data)
              } else if(data.entitytype == 'CREDORA'){ // Type Creditor
                this._entitiesCreditor.push(data)
                this._entitiesCreditorGroup.push(data)
              } else if( data.entitytype == 'GESTORA'){ // Type Creditor Group
                this._entitiesCreditorGroup.push(data)
              }else if( data.entitytype == 'REGISTRADORA'){ // Type Registrar
                this._entitiesRegistrar.push(data)
              }
              
            })
          },
          error => {console.log(error)
                    this._errorMessage = error.error }
          )   

  }             
    createGroup(){
    this._groupAddService.createGroup(this._groupData)
    .subscribe(
      res => {
        console.log(res)
        //this._router.navigate(['/group-main'])
      },
      error => console.log(error) 
      )
    }


  

  }
