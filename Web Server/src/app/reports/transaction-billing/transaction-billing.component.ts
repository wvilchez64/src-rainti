import { Component, OnInit } from '@angular/core';
import { dataTransactionBilling } from './fixed-data-transaction-billing';

@Component({
  selector: 'app-transaction-billing',
  templateUrl: './transaction-billing.component.html',
  styleUrls: ['./transaction-billing.component.css']
})
export class TransactionBillingComponent implements OnInit {

  public dataTransactionBilling: any[] = dataTransactionBilling;

  filter: string[] =['semFiltros'];
  dataAte: any[];
  dataDe: any[];
  detranList: string[] = ['Acre', 'Pernambuco', 'Bahia'];

  gestoraList: any[] = ['ITAU', 'Santander', 'CaixaEconômica'];
  
  page = 1;
  pageSize= 7;

  constructor( ){}

  ngOnInit() {}

  markAsActive(filter: string[]){
    this.filter = filter;

  }

}
