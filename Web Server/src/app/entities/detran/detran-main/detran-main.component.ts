import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetranMainService } from '../detran-services/detran-main.service';
import { DetranAddService } from '../detran-services/detran-add.service';

@Component({
  selector: 'app-detran',
  templateUrl: './detran-main.component.html',
  styleUrls: ['./detran-main.component.css']
})
export class DetranMainComponent implements OnInit {

  entities: Array<any> = []
  searchText: ''
  
  constructor(private _detranService: DetranMainService,
    private _router: Router,
    private _detranAddService: DetranAddService) { 
      
    }

  ngOnInit() {
    this._detranService.getDetrans()
    .subscribe(      
      res => this.entities = res,
      err => console.log(err)
    ) 
  }

  addDetran(){
    this._detranAddService.getStates()
    .subscribe(      
      res => {
        if(res.length == 0){
          console.log("Todos os Detrans já cadastrados")
        }else{
          this._router.navigate(['/detran-adicionar'])
        }
        
      },
      err => console.log(err)
    ) 
  }

}
