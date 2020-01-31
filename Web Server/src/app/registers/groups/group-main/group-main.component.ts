import { Component, OnInit } from '@angular/core';
import { GroupMainService } from '../group-services/group-main.service';


@Component({
  selector: 'app-user-main',
  templateUrl: './group-main.component.html',
  styleUrls: ['./group-main.component.css']
})
export class GroupMainComponent implements OnInit {

  groupMain: Array<any> = []
  searchText: ''
  name: ''
  _status: ''
  userData = {id: ''} 
  constructor(private _groupService: GroupMainService) { 
      
    }

  ngOnInit() {
    this._groupService.getGroup()
    .subscribe(      
      res => this.groupMain = res,
      err => console.log(err)
    ) 
  }

  disableGroup(id){
    this.userData.id = id
    this._groupService.disableGroup(this.userData)
    .subscribe(res =>{
      console.log(res)
      this.ngOnInit()
    },
    err => {
      console.log(err)
    })

  }
}

