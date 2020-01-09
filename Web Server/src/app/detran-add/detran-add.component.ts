import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detran-add',
  templateUrl: './detran-add.component.html',
  styleUrls: ['./detran-add.component.css']
})
export class DetranAddComponent implements OnInit {
  
  userData = {
    userName : '',
    cnpj : '',
    phone : '',
    email : '',
    topic : ''
  }
  _errorMessage = ''
  _states : Array<any> = [] 
  topicHasError = true;

  constructor(private _auth: AuthService,
    private _router: Router) {       
      
    }

    validateTopic(value) {
      if (value === 'default') {
        this.topicHasError = true;
      } else {
        this.topicHasError = false;
      }
    }

  ngOnInit() {
    this._auth.getStates()
    .subscribe(
      res => {
        console.log(res)
        this._states = res
      },
      error => {console.log(error)
                this._errorMessage = error.error }
      )
  }

  createDetran(){
    this._auth.createDetran(this.userData)
      .subscribe(
        res => {
          console.log(res)
          this._router.navigate(['/detran'])
        },
        error => {console.log(error)
                  this._errorMessage = error.error }
        )  
    
  }

}
