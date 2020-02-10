import { Component, OnInit } from '@angular/core';
import { GroupAddService } from '../group-services/group-add.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.css']
})
export class GroupAddComponent implements OnInit {

  _detranErrorMessage = ''
  _creditorErrorMessage = ''
  _creditorGroupErrorMessage = ''
  _adminErrorMessage = ''

  _detranSaving = false
  _creditorSaving = false
  _creditorGroupSaving = false
  _adminSaving = false

  _detranData = {
    entitytype: 'DETRAN',
    planname: '',
    planstatus: true,
    entities: [],
    features: [],
  }

  _creditorData = {
    entitytype: 'CREDORA',
    planname: '',
    planstatus: true,
    entities: [],
    features: [],
  }
  _creditorGroupData = {
    entitytype: 'GESTORA',
    planname: '',
    planstatus: true,
    entities: [],
    features: [],
  }
  _adminData = {
    entitytype: 'ADMIN',
    planname: '',
    planstatus: true,
    entities: [],
    features: [],
  }

  constructor(private _groupAddService: GroupAddService,
    private _location: Location,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {

    this._groupAddService.getUserGroupFeatures()
      .subscribe(
        res => {
          //console.log(res) 
          res.forEach((data) => {
            if (data.entitytype == 'DETRAN') { // Type Detran
              this._detranData.features.push(data)
            } else if (data.entitytype == 'CREDORA') { // Type Creditor
              this._creditorData.features.push(data)
            } else if (data.entitytype == 'GESTORA') { // Type Creditor Group
              this._creditorGroupData.features.push(data)
            } else if (data.entitytype == 'ADMIN') { // Type Admin
              this._adminData.features.push(data)
            } else if (data.entitytype == 'REGISTRADORA') { // Type Registrar
              //this._detranData.features.push(data)
            }
          })

        },
        error => { console.log(error)
          this.toastr.error('Erro ao carregar as funcionalidades, por favor recarregue a página.');  
        }
      )

    this._groupAddService.getUserGroupEntities()
      .subscribe(
        res => {
          console.log(res) 
          res.forEach((data) => {
            if (data.entitytype == 'DETRAN') { // Type Detran
              this._detranData.entities.push(data)
              this._adminData.entities.push(data)
            } else if (data.entitytype == 'CREDORA') { // Type Creditor
              this._creditorData.entities.push(data)
              this._creditorGroupData.entities.push(data)
              this._adminData.entities.push(data)
            } else if (data.entitytype == 'GESTORA') { // Type Creditor Group
              this._creditorGroupData.entities.push(data)
              this._adminData.entities.push(data)
            }else if (data.entitytype == 'REGISTRADORA') { // Type Registrar
              //this._entitiesRegistrar.push(data)
            }

          })
        },
        error => { console.log(error)
          this.toastr.error('Erro ao carregar as instituições, por favor recarregue a página.');  
        }
      )

  }

  detranFeaturesControl(event) {

    this._detranData.features.forEach(val => {
      if (("detran." + val.featurename) === event.target.id) {
        val.checked = event.target.checked
      }
    })
    console.log(this._detranData.features)
  }

  creditorFeaturesControl(event) {

    this._creditorData.features.forEach(val => {
      if (("creditor." + val.featurename) === event.target.id) {
        val.checked = event.target.checked
      }
    })
    console.log(this._creditorData.features)
  }

  creditorGroupFeaturesControl(event) {

    this._creditorGroupData.features.forEach(val => {
      if (("creditorGroup." + val.featurename) === event.target.id) {
        val.checked = event.target.checked
      }
    })
    console.log(this._creditorGroupData.features)
  }

  adminFeaturesControl(event) {

    this._adminData.features.forEach(val => {
      if (("admin." + val.featurename) === event.target.id) {
        val.checked = event.target.checked
      }
    })
    console.log(this._adminData.features)
  }

  detranEntitiesControl(event) {

    this._detranData.entities.forEach(val => {
      if (("detran." + val.entityname) === event.target.id) {
        val.checked = event.target.checked
      }
    })
    console.log(this._detranData.entities)
  }

  creditorEntitiesControl(event) {

    this._creditorData.entities.forEach(val => {
      if (("creditor." + val.entityname) === event.target.id) {
        val.checked = event.target.checked
      }
    })
    console.log(this._creditorData.entities)
  }

  creditorGroupEntitiesControl(event) {

    this._creditorGroupData.entities.forEach(val => {
      if (("creditorGroup." + val.entityname) === event.target.id) {
        val.checked = event.target.checked
      }
    })
    console.log(this._creditorGroupData.entities)
  }

  adminEntitiesControl(event) {

    this._adminData.entities.forEach(val => {
      if (("admin." + val.entityname) === event.target.id) {
        val.checked = event.target.checked
      }
    })
    console.log(this._adminData.entities)
  }



  createDetranGroup() {

    this._detranErrorMessage = 'Selecione pelo menos uma Entidade'
    this._detranData.entities.forEach(element => {
      if (element.checked == true) {
        this._detranErrorMessage = ''
      }
    });
    if (this._detranErrorMessage == 'Selecione pelo menos uma Entidade') {
      console.log(this._detranErrorMessage)
      return
    }

    this._detranErrorMessage = 'Selecione pelo menos uma Funcionalidade'
    this._detranData.features.forEach(element => {
      if (element.checked == true) {
        this._detranErrorMessage = ''
      }
    });
    if (this._detranErrorMessage == 'Selecione pelo menos uma Funcionalidade') {
      console.log(this._detranErrorMessage)
      return
    }
    console.log(this._detranData)
    this._detranSaving = true
    
    this._groupAddService.createGroup(this._detranData)
      .subscribe(
        res => {
          this._detranSaving = false 
          this.toastr.success('Grupo para Detran criado com sucesso!');         
        },
        error => {
          console.log(error)
          this._detranSaving = false
          this.toastr.error('Erro ao criar grupo para Detran.');     
        }
      )
  }

  createCreditorGroup() {

    this._creditorErrorMessage = 'Selecione pelo menos uma Entidade'
    this._creditorData.entities.forEach(element => {
      if (element.checked == true) {
        this._creditorErrorMessage = ''
      }
    });
    if (this._creditorErrorMessage == 'Selecione pelo menos uma Entidade') {
      console.log(this._creditorErrorMessage)
      return
    }

    this._creditorErrorMessage = 'Selecione pelo menos uma Funcionalidade'
    this._creditorData.features.forEach(element => {
      if (element.checked == true) {
        this._creditorErrorMessage = ''
      }
    });
    if (this._creditorErrorMessage == 'Selecione pelo menos uma Funcionalidade') {
      console.log(this._creditorErrorMessage)
      return
    }
    console.log(this._creditorData)
    this._creditorSaving = true 
    
    this._groupAddService.createGroup(this._creditorData)
      .subscribe(
        res => {
          this._creditorSaving = false 
          this.toastr.success('Grupo para credora criado com sucesso!');
          //this._router.navigate(['/group-main'])
        },
        error =>{ 
        console.log(error)
        this._creditorSaving = false
        this.toastr.error('Erro ao criar grupo para credora.');
      }
      )
  }

  createCreditorGroupGroup() {

    this._creditorGroupErrorMessage = 'Selecione pelo menos uma Entidade'
    this._creditorGroupData.entities.forEach(element => {
      if (element.checked == true) {
        this._creditorGroupErrorMessage = ''
      }
    });
    if (this._creditorGroupErrorMessage == 'Selecione pelo menos uma Entidade') {
      console.log(this._creditorGroupErrorMessage)
      return
    }

    this._creditorGroupErrorMessage = 'Selecione pelo menos uma Funcionalidade'
    this._creditorGroupData.features.forEach(element => {
      if (element.checked == true) {
        this._creditorGroupErrorMessage = ''
      }
    });
    if (this._creditorGroupErrorMessage == 'Selecione pelo menos uma Funcionalidade') {
      console.log(this._creditorGroupErrorMessage)
      return
    }
    console.log(this._creditorGroupData)
    this._creditorGroupSaving = true 
    this._groupAddService.createGroup(this._creditorGroupData)
      .subscribe(
        res => {
          
          this._creditorGroupSaving = false 
          this.toastr.success('Grupo para gestora criado com sucesso!');
          //this._router.navigate(['/group-main'])
        },
        error => {
          console.log(error)
          this._creditorGroupSaving = false
          this.toastr.error('Erro ao criar grupo para gestora.');
        }
      )
  }

  createAdminGroup() {

    this._adminErrorMessage = 'Selecione pelo menos uma Entidade'
    this._adminData.entities.forEach(element => {
      if (element.checked == true) {
        this._adminErrorMessage = ''
      }
    });
    if (this._adminErrorMessage == 'Selecione pelo menos uma Entidade') {
      console.log(this._adminErrorMessage)
      return
    }

    this._adminErrorMessage = 'Selecione pelo menos uma Funcionalidade'
    this._adminData.features.forEach(element => {
      if (element.checked == true) {
        this._adminErrorMessage = ''
      }
    });
    if (this._adminErrorMessage == 'Selecione pelo menos uma Funcionalidade') {
      console.log(this._adminErrorMessage)
      return
    }
    this._adminSaving = true 
    console.log(this._adminData)
    
    this._groupAddService.createGroup(this._adminData)
      .subscribe(
        res => {
          
          this._adminSaving = false 
          this.toastr.success('Grupo administrador criado com sucesso!');
          //this._router.navigate(['/group-main'])
        },
        error => {
        console.log(error);
        this._adminSaving = false 
        this.toastr.error('Erro ao criar grupo administrador.');
        }
        
      )
  }

  backToGroups(){
    this._location.back()
  }

}
