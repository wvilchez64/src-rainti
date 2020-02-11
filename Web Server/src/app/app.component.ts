import { Component, OnInit, Input } from '@angular/core';
import { EntitiesService } from './entities/entities-services/entities.service';
import { AuthService } from './system-access/system-access-services/auth.service';
import { Router } from '@angular/router';
import { DetranService } from './detran.service';
import { NgbModal, NgbActiveModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FeaturesService } from './features.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SRC - Sistema de Registro de Contrato';

  _userFeatures: {
    id: '',
    component: '',

  }

  detranAllowed = ''

  _contractRegister = {
    main : false,
    add : false,
    view : false
  } 
  _entities = {
    main: false,
    detran: {
      main: false,
      add: false,
      view: false
    },
    creditor: {
      main: false,
      add: false,
      view: false
    },
    creditorGroup: {
      main: false,
      add: false,
      view: false
    }
  }
  _admin = {
    main: false,
    users: {
      main: false,
      add: false,
      view: false
    },
    groups: {
      main: false,
      add: false,
      view: false
    },
  }
  _reports = {
    main : false,
    billing: false,
    transactions: false,

  }
  _audit = false

  constructor(private _featuresService: FeaturesService,
    public _authService: AuthService,
    public _router: Router,
    public _detranService: DetranService,
    private _modalService: NgbModal,
    private _config: NgbModalConfig) {
    _config.backdrop = 'static';
    _config.keyboard = false;

  }


  ngOnInit() {
    this._featuresService.getUserGroupFeatures()
      .subscribe(
        res => {
          
          res.forEach(element => {
            
            if (element.featurename.includes('Usuário') || element.featurename.includes('Grupo')) {
              this._admin.main = true
              if (element.featurename.includes('Usuário')) {
                this._admin.users.main = true
                if (element.featurename.includes('Adicionar')) {
                  this._admin.users.add = true
                } else if (element.featurename.includes('Consulta')) {
                  this._admin.users.view = true
                }
              } else {
                this._admin.groups.main = true
                if (element.featurename.includes('Adicionar')) {
                  this._admin.groups.add = true
                } else if (element.featurename.includes('Consulta')) {
                  this._admin.groups.view = true
                }
              }
            } else if (element.featurename.includes('Detran') || element.featurename.includes('Credora') || element.featurename.includes('Gestora')) {
              this._entities.main = true
              if (element.featurename.includes('Detran')) {
                this._entities.detran.main = true
                if (element.featurename.includes('Adicionar')) {
                  this._entities.detran.add = true
                } else if (element.featurename.includes('Consulta')) {
                  this._entities.detran.view = true
                }
              } else if (element.featurename.includes('Credora')) {
                this._entities.creditor.main = true
                if (element.featurename.includes('Adicionar')) {
                  this._entities.creditor.add = true
                } else if (element.featurename.includes('Consulta')) {
                  this._entities.creditor.view = true
                }
              } else {
                this._entities.creditorGroup.main = true
                if (element.featurename.includes('Adicionar')) {
                  this._entities.creditorGroup.add = true
                } else if (element.featurename.includes('Consulta')) {
                  this._entities.creditorGroup.view = true
                }
              }
            } else if (element.featurename.includes('Contrato')) {
              this._contractRegister.main = true
              if (element.featurename.includes('Adicionar')) {
                this._contractRegister.add = true
              } else if (element.featurename.includes('Consulta')) {
                this._contractRegister.view = true
              }

            }else if (element.featurename.includes('Bilhetagem') || element.featurename.includes('Financeiras')) {
              this._reports.main = true
              if (element.featurename.includes('Bilhetagem')) {
                this._reports.billing = true
              } else if (element.featurename.includes('Financeiras')) {
                this._reports.transactions = true
              }

            }
          });

        },
        err => {
          console.log(err)
        }
      )
  }

  checkDetranAvaiability(content) {
    this._detranService.getStates()
      .subscribe(
        res => {
          if (res.length == 0) {
            this._modalService.open(content)
          } else {
            this._router.navigate(["/detran-adicionar"])
          }

        },
        err => {
          console.log(err)
        }
      )
  }
}

