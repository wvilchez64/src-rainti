import { Component, OnInit } from '@angular/core';
import { dataTransactionBilling } from './fixed-data-transaction-billing';
import {ExcelService} from './excel.service';
import {CsvFileService} from './csv.service';

@Component({
  selector: 'app-transaction-billing',
  templateUrl: './transaction-billing.component.html',
  styleUrls: ['./transaction-billing.component.css']
})
export class TransactionBillingComponent implements OnInit {
  ngOnInit() {}
    
    //array da tabela
    public dataTransactionBilling: any = dataTransactionBilling;
    filterTransactionBilling: any [] =[];
    filterdetran: any [] =[];;

    //filtros da tabela
    detran: string;
    creditor: string;
    startDate: Date;
    endDate: Date;

    //botões mostrar filtro
    filter: string[] =['semFiltros'];

    // detranList: any[] = ['','Acre', 'Pernambuco', 'Bahia'];
    // gestoraList: string[] = ['ITAU', 'Santander', 'CaixaEconômica'];

    //paginação
    page = 1;
    pageSize= 5;

    //export XLS
    groupData: any;
    
    constructor( 
                  private excelService:ExcelService, 
                  public csvFileService:CsvFileService
                )
    {

    this.groupData = this.organise(this.filterTransactionBilling);

    }
    exportAsXLSX(){

      this.excelService.exportAsExcelFile(this.filterTransactionBilling, 'Bilhetagem_Transações_RainTI');
       
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

    CsvFile(){
      return this.csvFileService.CsvFile(this.filterTransactionBilling)
      }

   
 
  markAsActive(filter: string[]){
    this.filter = filter;
    delete this.detran;
    delete this.creditor;
    delete this.startDate;
    delete this.endDate;
    
  }

  getTotalCost() {
    return this.filterTransactionBilling.reduce((acc, val) => acc += val.Taxa, 0);
  }

      getArray(){

      if (this.filterTransactionBilling.length  == 0 && this.detran === undefined && this.creditor === undefined) {
        this.filterTransactionBilling = dataTransactionBilling;
        return this.filterTransactionBilling;
      }
      
      if (this.detran !== undefined && this.creditor === undefined && this.startDate === undefined && this.endDate === undefined) {
      
      this.filterTransactionBilling = dataTransactionBilling.filter(
         v => v.Detran.toLocaleLowerCase().includes(this.detran.toLocaleLowerCase()));
      }
      if (this.detran !== undefined && this.creditor !== undefined && this.startDate === undefined && this.endDate === undefined)
      {
         this.filterdetran = dataTransactionBilling.filter(
          v => v.Detran.toLocaleLowerCase().includes(this.detran.toLocaleLowerCase()));
          this.filterTransactionBilling = this.filterdetran
      }

      if (this.detran !== undefined && this.creditor === undefined && this.startDate !== undefined && this.endDate !== undefined )
      {
         this.filterdetran = dataTransactionBilling.filter(
          v => v.Detran.toLocaleLowerCase().includes(this.detran.toLocaleLowerCase()));
          this.filterTransactionBilling = this.filterdetran
      }

      if (this.creditor !== undefined && this.detran === undefined && this.startDate === undefined && this.endDate === undefined) {
         this.filterTransactionBilling = dataTransactionBilling.filter(
          d => d.Credora.toLocaleLowerCase().includes(this.creditor.toLocaleLowerCase()));
        }

        if (this.creditor !== undefined && this.detran === undefined && this.startDate !== undefined && this.endDate !== undefined ) {
            this.filterTransactionBilling = this.filterdetran.filter(
            d => d.Credora.toLocaleLowerCase().includes(this.creditor.toLocaleLowerCase()));
      }

      if (this.creditor !== undefined && this.detran !== undefined && this.startDate === undefined && this.endDate === undefined) {
        this.filterTransactionBilling = this.filterdetran.filter(
        d => d.Credora.toLocaleLowerCase().includes(this.creditor.toLocaleLowerCase()));
      }

      if (this.startDate !== undefined && this.endDate !== undefined && this.detran === undefined && this.creditor === undefined) {

        this.dataTransactionBilling.Data = new Date().getTime();
        this.filterTransactionBilling = dataTransactionBilling.filter((y) =>
         y.Data >= this.startDate && y.Data <= this.endDate);
      }

      if (this.startDate !== undefined && this.endDate !== undefined && this.detran !== undefined && this.creditor === undefined) {

      this.dataTransactionBilling.Data = new Date().getTime();
      this.filterTransactionBilling = dataTransactionBilling.filter((y) =>
        y.Data >= this.startDate && y.Data <= this.endDate);
      }
      
      if (this.startDate !== undefined && this.endDate !== undefined && this.detran === undefined && this.creditor !== undefined) {

        this.dataTransactionBilling.Data = new Date().getTime();
        this.filterTransactionBilling = dataTransactionBilling.filter((y) =>
          y.Data >= this.startDate && y.Data <= this.endDate);
    
      }

      if (this.startDate !== undefined && this.endDate !== undefined && this.detran !== undefined && this.creditor !== undefined) {

        this.dataTransactionBilling.Data = new Date().getTime();
        this.filterTransactionBilling = dataTransactionBilling.filter((y) =>
          y.Data >= this.startDate && y.Data <= this.endDate);
        
        this.filterTransactionBilling = this.filterTransactionBilling.filter(
          d => d.Credora.toLocaleLowerCase().includes(this.creditor.toLocaleLowerCase()));

        this.filterTransactionBilling = this.filterTransactionBilling.filter(
          v => v.Detran.toLocaleLowerCase().includes(this.detran.toLocaleLowerCase()));
    
      }

      return this.filterTransactionBilling;
    

}
}


