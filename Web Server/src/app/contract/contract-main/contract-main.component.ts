import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContractMainService } from '../../contract/contract-services/contract-main.service';

@Component({
  selector: 'app-contract-main',
  templateUrl: './contract-main.component.html',
  styleUrls: ['./contract-main.component.css']
})
export class ContractMainComponent implements OnInit {
 
  _contracts: Array<any> = []
  searchText: ''
  name: ''

  constructor(private _contractMainService: ContractMainService,
              private _router: Router){}   

  ngOnInit() {
    this._contractMainService.getContracts()
    .subscribe(      
      res => this._contracts = res,
      err => console.log(err)
    ) 
  }

 addContract(){
    this._router.navigate(['/registrar-contrato'])
  }

}
