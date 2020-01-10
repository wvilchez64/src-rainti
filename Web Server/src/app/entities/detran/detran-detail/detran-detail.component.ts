import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetranDetailService } from '../detran-services/detran-detail.service';

@Component({
  selector: 'app-detran-detail',
  templateUrl: './detran-detail.component.html',
  styleUrls: ['./detran-detail.component.css']
})
export class DetranDetailComponent implements OnInit {

  detranData = {
    name: '',
    cnpj: '',
    phone: '',
    email: '',
  }

  constructor(private route: ActivatedRoute,
    private _detranDetail: DetranDetailService ) { }

  ngOnInit() {
    
    this.route.paramMap
    .subscribe(
      params => {
        this._detranDetail.getDetran(params.get('id'))
        .subscribe(
          res => {
            this.detranData = res[0]
          },
          err => {
            console.log(err)
          }
        )   
    }
      
    );
  }

  updateDetran(){
    this.route.paramMap
    .subscribe(
      params => {
        this._detranDetail.updateDetran(this.detranData, params.get('id'))
        .subscribe(
          res => {
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
    
  }


}
