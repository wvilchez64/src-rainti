import { Component, OnInit } from '@angular/core';
import { dataTransactionBilling } from './fixed-data-transaction-billing';
import {ExcelService} from './excel.service';


@Component({
  selector: 'app-transaction-billing',
  templateUrl: './transaction-billing.component.html',
  styleUrls: ['./transaction-billing.component.css']
})
export class TransactionBillingComponent implements OnInit {
  ngOnInit() {  }

    public dataTransactionBilling: any = dataTransactionBilling;
    filter: string[] =['semFiltros'];
    dataAte: any[];
    dataDe: any[];
    detranList: string[] = ['Acre', 'Pernambuco', 'Bahia'];
    gestoraList: any[] = ['ITAU', 'Santander', 'CaixaEconômica'];
    page = 1;
    pageSize= 5;
    groupData: any;
    registro: any[] =[22];
    
    constructor( private excelService:ExcelService )
    {

    this.groupData = this.organise(this.dataTransactionBilling);

    }
    exportAsXLSX() {

      this.excelService.exportAsExcelFile(this.dataTransactionBilling, 'Bilhetagem_Transações_RainTI');
       
    } 

    organise(arr) {
      var headers = [], 
        objs = [],    
        i, j;
      for (i = 0; i < arr.length; ++i) {
        j = headers.indexOf(arr[i].id); 
        if (j === -1) { 
          j = headers.length;
          headers[j] = arr[i].id;
          objs[j] = {};
          objs[j].id = arr[i].id;
          objs[j].data = [];
        }
        objs[j].data.push( 
          {
            case_worked: arr[i].case_worked,
            note: arr[i].note, id: arr[i].id
          }
        );
      }
      return objs;
    }
 
  markAsActive(filter: string[]){
    this.filter = filter;
    
  }

}
