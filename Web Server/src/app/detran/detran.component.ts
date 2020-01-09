import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntitiesService } from '../entities.service';

@Component({
  selector: 'app-detran',
  templateUrl: './detran.component.html',
  styleUrls: ['./detran.component.css']
})
export class DetranComponent implements OnInit {

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
