import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DetranContactDetailService } from '../detran-services/detran-contact-detail.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-detran-contact-detail',
  templateUrl: './detran-contact-detail.component.html',
  styleUrls: ['./detran-contact-detail.component.css']
})
export class DetranContactDetailComponent implements OnInit {

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
              private _detranContactDetail: DetranContactDetailService,
              private toastr: ToastrService,
               ) { }

  ngOnInit() {
    this._route.paramMap
    .subscribe(
      params => {
        this._detranContactDetail.getDetranContactById(params.get('id'))
        .subscribe(
          res => {
            console.log(res[0])
            this.userData = res[0]
          },
          err => {
            console.log(err)
          }
        )   
    }      
    );
  }

  updateDetranContactById(){
    this._route.paramMap
    .subscribe(
      params => {
        this._detranContactDetail.updateDetranContactById(params.get('id'),this.userData)
        .subscribe(
          res => {
            console.log(res)
            this.toastr.success('Alterações salva com sucesso!');
            this.backToDetranContacts()
          },
          err => {
            console.log(err)
            this.toastr.error('Erro ao salvar alterações.');
          }
        )   
    }      
    );
  }

  deleteDetranContactById(){
    this._route.paramMap
    .subscribe(
      params => {
        this._detranContactDetail.deleteDetranContactById(params.get('id'))
        .subscribe(
          res => {
            console.log(res)
            this.toastr.success('Contato deletado com sucesso!');
            this.backToDetranContacts()
          },
          err => {
            console.log(err)
            this.toastr.error('Erro ao deletar contato.');
          }
        )   
    }      
    );
  }

  backToDetranContacts(){
    this._location.back()
  }

}
