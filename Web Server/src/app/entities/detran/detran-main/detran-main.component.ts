import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntitiesService } from '../../entities-services/entities.service';

@Component({
  selector: 'app-detran',
  templateUrl: './detran-main.component.html',
  styleUrls: ['./detran-main.component.css']
})
export class DetranMainComponent implements OnInit {

  entities: Array<any> = []
  searchText: ''
  name: ''
  constructor(private _entitiesService: EntitiesService,
    private _router: Router) { 
      
    }

  ngOnInit() {
    this._entitiesService.getDetrans()
    .subscribe(      
      res => this.entities = res,
      err => console.log(err)
    ) 
  }

}
