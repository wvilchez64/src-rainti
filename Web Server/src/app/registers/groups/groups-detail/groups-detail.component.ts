import { Component, OnInit } from '@angular/core';
import { GroupDetailService } from '../group-services/group-detail.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-groups-detail',
  templateUrl: './groups-detail.component.html',
  styleUrls: ['./groups-detail.component.css']
})
export class GroupsDetailComponent implements OnInit {

  _userData = {id: ''}

  _detranErrorMessage = ''
  _creditorErrorMessage = ''
  _creditorGroupErrorMessage = ''
  _adminErrorMessage = ''

  _detranSaving = false
  _creditorSaving = false
  _creditorGroupSaving = false
  _adminSaving = false

  _userGroupEntityType = ''

  _detranData = {
    planname: '',
    planstatus: true,
    entities: [],
    features: [],
  }

  _creditorData = {
    planname: '',
    planstatus: true,
    entities: [],
    features: [],
  }
  _creditorGroupData = {
    planname: '',
    planstatus: true,
    entities: [],
    features: [],
  }
  _adminData = {
    planname: '',
    planstatus: true,
    entities: [],
    features: [],
  }

  _activeTab = ''

  constructor(private _groupDetailService: GroupDetailService,
    private _route: ActivatedRoute,
    private _location: Location,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this._route.paramMap
    .subscribe(
      params => {

        this._groupDetailService.getUserGroupByid(params.get('id'))
        .subscribe(
          res => {
            //console.log(res[0])
            res.forEach(data =>{
              if (data.entitytype == 'DETRAN') { // Type Detran
                this._detranData.planname = data.planname
                this._detranData.planstatus = data.planstatus
                this._userGroupEntityType = 'DETRAN'
              } else if (data.entitytype == 'CREDORA') { // Type Creditor
                this._creditorData.planname = data.planname
                this._creditorData.planstatus = data.planstatus
                this._userGroupEntityType = 'CREDORA'
              } else if (data.entitytype == 'GESTORA') { // Type Creditor Group
                this._creditorGroupData.planname = data.planname
                this._creditorGroupData.planstatus = data.planstatus
                this._userGroupEntityType = 'GESTORA'
              } else if (data.entitytype == 'ADMIN') { // Type Admin
                this._adminData.planname = data.planname
                this._adminData.planstatus = data.planstatus
                this._userGroupEntityType = 'ADMIN'
                console.log("Cheguei")
                console.log("plano: "+data.planname,
                "entidade status: "+data.planstatus,
                "entidade: "+ this._userGroupEntityType)


              } else if (data.entitytype == 'REGISTRADORA') { // Type Registrar
                //this._detranData.features.push(data)
              }
            })
               
          },
          error => { 
            console.log(error) 
            this.toastr.error('Erro ao carregar as informações do usuário, por favor recarregue a página.');  

          }
        )
        
        this._groupDetailService.getUserGroupFeaturesById(params.get('id'))
        .subscribe(
          res => {
            console.log(res) 
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
          error => { 
            console.log(error) 
            this.toastr.error('Erro ao carregar as funcionalidades, por favor recarregue a página.');  
          }
        )
        this._groupDetailService.getUserGroupEntitiesByid(params.get('id'))
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
        error => {
           console.log(error)
           this.toastr.error('Erro ao carregar as instituições, por favor recarregue a página.'); 
           }
      )
      
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

  updateDetranGroup() {

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
    
    this._route.paramMap.subscribe(
      params =>{
        this._groupDetailService.updateGroup(params.get('id'),this._detranData)
        .subscribe(
          res => {
            this._detranSaving = false 
            this.toastr.success('Alterações salvas com sucesso!'); 
            this.backToGroups();
         
          },
          error => {
            console.log(error)
            this._detranSaving = false
            this.toastr.error('Erro ao salvar alterações.');    
          }
        )
      }
    )
    
  }

  updateCreditorGroup() {

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
    this._route.paramMap.subscribe(
      params =>{
        this._groupDetailService.updateGroup(params.get('id'),this._creditorData)
        .subscribe(
          res => {
            this._detranSaving = false
            this.toastr.success('Alterações salvas com sucesso!'); 
            this.backToGroups();
            
          },
          error => {
            console.log(error)
            this._detranSaving = false
            this.toastr.error('Erro ao salvar alterações.'); 
          }
        )
      }
    )
  }

  updateCreditorGroupGroup() {

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
    this._route.paramMap.subscribe(
      params =>{
        this._groupDetailService.updateGroup(params.get('id'),this._creditorGroupData)
        .subscribe(
          res => {
            this._detranSaving = false
            this.toastr.success('Alterações salvas com sucesso!'); 
            this.backToGroups();
          
          },
          error => {
            console.log(error)
            this._detranSaving = false
            this.toastr.error('Erro ao salvar alterações.'); 
          }
        )
      }
    )
  }

  updateAdminGroup() {

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
    console.log(this._adminData)
    this._route.paramMap.subscribe(
      params =>{
        this._groupDetailService.updateGroup(params.get('id'),this._adminData)
        .subscribe(
          res => {
            this._detranSaving = false
            this.toastr.success('Alterações salvas com sucesso!'); 
            this.backToGroups();          
          },
          error => {
            console.log(error)
            this._detranSaving = false
            this.toastr.error('Erro ao salvar alterações.'); 
          }
        )
      }
    )
  }

  deleteGroup(){
    this._route.paramMap.subscribe(
      params =>{
        this._userData.id = params.get('id')
        this._groupDetailService.deleteGroup(this._userData)
        .subscribe(
          res => {
            this._detranSaving = false
            this.toastr.success('Grupo deletado com sucesso!'); 
            this.backToGroups();         
          },
          error => {
            console.log(error)
            this._detranSaving = false
            this.toastr.error('Erro ao salvar alterações.'); 
          }
        )
      }
    )
  }

  backToGroups(){
    this._location.back()
  }

}
