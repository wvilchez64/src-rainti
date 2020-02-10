import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetranDetailService } from '../detran-services/detran-detail.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-detran-detail',
  templateUrl: './detran-detail.component.html',
  styleUrls: ['./detran-detail.component.css']
})
export class DetranDetailComponent implements OnInit {

  detranData = {
    name: '',
    cnpj: '',
    state:'',
    phone: '',
    email: '',
    dddModel: '',
  }

  detranDataOld = {
    name: '',
    cnpj: '',
    state:'',
    phone: '',
    email: '',
    dddModel: '',
  }

  _registerUpdated = ''

  constructor(private route: ActivatedRoute,
    private _detranDetail: DetranDetailService,
    private _location: Location,
    private toastr: ToastrService,
     ) { }

  ngOnInit() {
    
    this.route.paramMap
    .subscribe(
      params => {
        this._detranDetail.getDetran(params.get('id'))
        .subscribe(
          res => {
            this.detranData = res[0]
            this.detranDataOld = res[0]
          },
          err => {
            console.log(err)
            this.toastr.error('Erro ao carregar as informações, por favor recarregue a página.'); 
          }
        )   
    }
      
    );
  }

  detranDataSender = {
    old : this.detranDataOld,
    new : this.detranData,
  }

  updateDetran(){
    this.route.paramMap
    .subscribe(
      params => {
        this._detranDetail.updateDetran(this.detranData, params.get('id'))
        .subscribe(
          res => {
            this.toastr.success('Alterações salvas com sucesso!'); 
            this.backToDetran()
            console.log(res)
          },
          err => {
            console.log(err)
            this.toastr.error('Erro ao salvar as alterações.'); 
          }
        )   
    }      
    );

  }

  deleteDetran(){
    this.route.paramMap
    .subscribe(
      params => {
        this._detranDetail.deleteDetran(this.detranData, params.get('id'))
        .subscribe(
          res => {
            console.log(res)
            this.toastr.success('Detran deletado com sucesso!'); 
            this.backToDetran()
          },
          err => {
            console.log(err)
            this.toastr.error('Erro ao deletar Detran.'); 
          }
        )   
    }
      
    );
  }

  backToDetran(){
    this._location.back()
  }


}
