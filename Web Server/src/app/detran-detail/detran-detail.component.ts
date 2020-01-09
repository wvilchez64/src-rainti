import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntitiesService } from '../entities.service';

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
    private entitiesService: EntitiesService ) { }

  ngOnInit() {
    
    this.route.paramMap
    .subscribe(
      params => {
        this.entitiesService.getDetran(params.get('id'))
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

  }

  deleteDetran(){
    
  }


}
