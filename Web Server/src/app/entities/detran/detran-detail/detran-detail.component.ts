import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetranDetailService } from '../detran-services/detran-detail.service';
import { Location } from '@angular/common';

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
    private _location: Location ) { }

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
            this._registerUpdated = 'Detran atualizado com sucesso.'
            console.log(res)
          },
          err => {
            console.log(err)
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
            this.backToDetran()
          },
          err => {
            console.log(err)
          }
        )   
    }
      
    );
  }

  backToDetran(){
    this._location.back()
  }


}
