import { Component, OnInit } from '@angular/core';
import { UserMainService } from '../user-services/user-main.service';



@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {

  user: Array<any> = []
  searchText: ''
  name: ''
  _status= 'Todos'
  
  constructor(private _userService: UserMainService) { 
      
    }

  ngOnInit() {
    this._userService.getUser()
    .subscribe(      
      res => {
        console.log(res)
        this.user = res
      },
      err => console.log(err)
    ) 
  }

  disableUser(id){
    
    this._userService.disableUser({"id":id})
    .subscribe(
      res => {
        console.log(res)
        this.ngOnInit()
      },
      err =>{
        console.log(err)
      }
    )
  }
}

