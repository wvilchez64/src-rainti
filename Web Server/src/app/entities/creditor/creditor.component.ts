import { Component, OnInit } from '@angular/core';
import { CreditorMainService } from './creditor-services/creditor-main.service';

@Component({
  selector: 'app-creditor',
  templateUrl: './creditor.component.html',
  styleUrls: ['./creditor.component.css']
})
export class CreditorComponent implements OnInit {

  
  creditors: Array<any> = []
  searchText: ''
  name: ''
  
  constructor(private _creditorService: CreditorMainService,
    ) { 
      
    }

  ngOnInit() {
    this._creditorService.getCreditors()
    .subscribe(      
      res => {
        this.creditors = res
      },
      err => {
        console.log(err)
      }
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
