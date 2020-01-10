import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetranMainService } from '../detran-services/detran-main.service';

@Component({
  selector: 'app-detran',
  templateUrl: './detran-main.component.html',
  styleUrls: ['./detran-main.component.css']
})
export class DetranMainComponent implements OnInit {

  entities: Array<any> = []
  searchText: ''
  name: ''
  constructor(private _detranService: DetranMainService,
    private _router: Router) { 
      
    }

  ngOnInit() {
    this._detranService.getDetrans()
    .subscribe(      
      res => this.entities = res,
      err => console.log(err)
    ) 
  }

}
