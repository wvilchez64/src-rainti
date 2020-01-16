import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupAddService } from '../group-services/group-add.service';
import { UserAddService } from '../../user/user-services/user-add.service';


@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.css']
})
export class GroupAddComponent implements OnInit {

  groupData = {
    planname : '',
    entityid : '',
    features: '',
  }
  _errorMessage = ''
  _entities: Array<any> = [] 
  _features : Array<any> = [] 
  topicHasError = true
  dddHasError = true
  getFetuares: Array<any> = [] 

  constructor(private _groupAddService: GroupAddService,
    private _router: Router,
    private _userAddService: UserAddService,
    ) {  }

    validateTopic(value) {
      if (value === 'default') {
        this.topicHasError = true;
      } else {
        this.topicHasError = false;
      }
    }

    ngOnInit() {

      this._groupAddService.getUserGroupFeatures()
      .subscribe(
        res => {
          console.log(res)
          this._features = res
               },
        error => {console.log(error)
                  this._errorMessage = error.error }
        )

        this._userAddService.getUserEntities()
        .subscribe(
          res => {
            console.log(res) 
            this._entities = res
          },
          error => {console.log(error)
                    this._errorMessage = error.error }
          )       

  }             
    createGroup(){
    this._groupAddService.createGroup(this.groupData)
    .subscribe(
      res => {
        console.log(res)
        //this._router.navigate(['/group-main'])
      },
      error => console.log(error) 
      )
    }


  

  }
