import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CreditorGroupContactDetailService } from '../creditor-group-services/creditor-group-contact-detail.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-creditor-group-contact-detail',
  templateUrl: './creditor-group-contact-detail.component.html',
  styleUrls: ['./creditor-group-contact-detail.component.css']
})
export class CreditorGroupContactDetailComponent implements OnInit {

  userData = {
    name: '',
    dddmodel: '',
    phone: '',
    email: '',
    additionalinfo: '',
  }
  _updatedMessage = ''
  constructor(private _location: Location,
              private _route: ActivatedRoute,
              private _creditorGroupContactDetail: CreditorGroupContactDetailService,
              private toastr: ToastrService,
               ) { }

  ngOnInit() {
    this._route.paramMap
    .subscribe(
      params => {
        this._creditorGroupContactDetail.getCreditorGroupContactById(params.get('id'))
        .subscribe(
          res => {
            console.log(res[0])
            this.userData = res[0]
          },
          err => {
            console.log(err)
            this.toastr.error('Erro ao carregar contato, por favor recarregue a página.');  
          }
        )   
    }      
    );
  }

  updateCreditorGroupContactById(){
    this._route.paramMap
    .subscribe(
      params => {
        this._creditorGroupContactDetail.updateCreditorGroupContactById(params.get('id'),this.userData)
        .subscribe(
          res => {
            console.log(res)
            this.toastr.success('Alterações salvas com sucesso!');
            this.backToCreditorGroupContacts()  
          },
          err => {
            console.log(err)
            this.toastr.error('Erro ao salvar alterações.');  
          }
        )   
    }      
    );
  }

  deleteCreditorGroupContactById(){
    this._route.paramMap
    .subscribe(
      params => {
        this._creditorGroupContactDetail.deleteCreditorGroupContactById(params.get('id'))
        .subscribe(
          res => {
            console.log(res)
            this.backToCreditorGroupContacts()
            this.toastr.success('Contato deletado com sucesso!');  
          },
          err => {
            console.log(err)
            this.toastr.error('Erro ao carregar as funcionalidades, por favor recarregue a página.');  
          }
        )   
    }      
    );
  }

  backToCreditorGroupContacts(){
    this._location.back()
  }

}