import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-billing',
  templateUrl: './transaction-billing.component.html',
  styleUrls: ['./transaction-billing.component.css']
})
export class TransactionBillingComponent implements OnInit {

  public data = [
    {id: '000001', nContrato: '8454423', gestora: 'B3', 
    credora:'ITAU', chassi: '8eV 2Ry3wy v2 094788', 
    detran: 'Piauí', tRegistro: 'R$ 29,00', dataRegistro: '28/02/2020'  },
   
   {id: '000002', nContrato: '9875234', gestora: '', 
    credora:'Bradesco', chassi: '4b2 Hk51ng 16 rG5965', 
    detran: 'Pernambuco', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },
   
   {nContrato: '7456453', gestora: '', credora:'Caixa Econômica Federal', 
    chassi: '56U H7A0G0 A8 1C7524', 
    detran: 'Pernambuco',  tRegistro: 'R$ 289,00', dataRegistro: '28/02/2020', status:'Aditivo'  },

   {id: '000001', nContrato: '8454423', gestora: 'B3', 
   credora:'ITAU', chassi: '8eV 2Ry3wy v2 094788', 
   detran: 'Piauí', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },
  
  {id: '000002', nContrato: '9875234', gestora: '', 
   credora:'Bradesco', chassi: '4b2 Hk51ng 16 rG5965', 
   detran: 'Pernambuco', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },
  
  {id: '000003', nContrato: '7456453', gestora: '', 
  credora:'Caixa Econômica Federal', chassi: '56U H7A0G0 A8 1C7524', 
  detran: 'Pernambuco',  tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

  {id: '000001', nContrato: '8454423', gestora: 'B3', 
  credora:'ITAU', chassi: '8eV 2Ry3wy v2 094788', 
  detran: 'Piauí', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },
 
 {id: '000002', nContrato: '9875234', gestora: '', 
  credora:'Bradesco', chassi: '4b2 Hk51ng 16 rG5965', 
  detran: 'Pernambuco', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },
 
 {id: '000003', nContrato: '7456453', gestora: '', 
 credora:'Caixa Econômica Federal', chassi: '56U H7A0G0 A8 1C7524', 
 detran: 'Pernambuco',  tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

 {id: '000001', nContrato: '8454423', gestora: 'B3', 
 credora:'ITAU', chassi: '8eV 2Ry3wy v2 094788', 
 detran: 'Piauí', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000002', nContrato: '9875234', gestora: '', 
 credora:'Bradesco', documento: '15.404.746/0001-38', chassi: '4b2 Hk51ng 16 rG5965', 
 detran: 'Pernambuco', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000003', nContrato: '7456453', gestora: '', 
credora:'Caixa Econômica Federal', chassi: '56U H7A0G0 A8 1C7524', 
detran: 'Pernambuco',  tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000001', nContrato: '8454423', gestora: 'B3', 
credora:'ITAU', chassi: '8eV 2Ry3wy v2 094788', 
detran: 'Piauí', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000002', nContrato: '9875234', gestora: '', 
credora:'Bradesco', chassi: '4b2 Hk51ng 16 rG5965', 
detran: 'Pernambuco', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000003', nContrato: '7456453', gestora: '', 
credora:'Caixa Econômica Federal', chassi: '56U H7A0G0 A8 1C7524', 
detran: 'Pernambuco',  tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000001', nContrato: '8454423', gestora: 'B3', 
credora:'ITAU', chassi: '8eV 2Ry3wy v2 094788', 
detran: 'Piauí', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000002', nContrato: '9875234', gestora: '', 
credora:'Bradesco', chassi: '4b2 Hk51ng 16 rG5965', 
detran: 'Pernambuco', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000003', nContrato: '7456453', gestora: '', 
credora:'Caixa Econômica Federal', chassi: '56U H7A0G0 A8 1C7524', 
detran: 'Pernambuco',  tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000001', nContrato: '8454423', gestora: 'B3', 
credora:'ITAU', chassi: '8eV 2Ry3wy v2 094788', 
detran: 'Piauí', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000002', nContrato: '9875234', gestora: '', 
credora:'Bradesco', chassi: '4b2 Hk51ng 16 rG5965', 
detran: 'Pernambuco', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000003', nContrato: '7456453', gestora: '', 
credora:'Caixa Econômica Federal', chassi: '56U H7A0G0 A8 1C7524', 
detran: 'Pernambuco',  tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000001', nContrato: '8454423', gestora: 'B3', 
credora:'ITAU', chassi: '8eV 2Ry3wy v2 094788', 
detran: 'Piauí', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000002', nContrato: '9875234', gestora: '', 
credora:'Bradesco', chassi: '4b2 Hk51ng 16 rG5965', 
detran: 'Pernambuco', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000003', nContrato: '7456453', gestora: '', 
credora:'Caixa Econômica Federal', chassi: '56U H7A0G0 A8 1C7524', 
detran: 'Pernambuco',  tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000001', nContrato: '8454423', gestora: 'B3', 
credora:'ITAU', chassi: '8eV 2Ry3wy v2 094788', 
detran: 'Piauí', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000002', nContrato: '9875234', gestora: '', 
credora:'Bradesco', chassi: '4b2 Hk51ng 16 rG5965', 
detran: 'Pernambuco', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000003', nContrato: '7456453', gestora: '', 
credora:'Caixa Econômica Federal', chassi: '56U H7A0G0 A8 1C7524', 
detran: 'Pernambuco',  tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000001', nContrato: '8454423', gestora: 'B3', 
credora:'ITAU', documento: '14.289.910/0001-40',chassi: '8eV 2Ry3wy v2 094788', 
detran: 'Piauí', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000002', nContrato: '9875234', gestora: '', 
credora:'Bradesco', documento: '15.404.746/0001-38', chassi: '4b2 Hk51ng 16 rG5965', 
detran: 'Pernambuco', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000003', nContrato: '7456453', gestora: '', 
credora:'Caixa Econômica Federal', documento: '92.424.042/0001-78', chassi: '56U H7A0G0 A8 1C7524', 
detran: 'Pernambuco',  tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000001', nContrato: '8454423', gestora: 'B3', 
credora:'ITAU', documento: '14.289.910/0001-40',chassi: '8eV 2Ry3wy v2 094788', 
detran: 'Piauí', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000002', nContrato: '9875234', gestora: '', 
credora:'Bradesco', documento: '15.404.746/0001-38', chassi: '4b2 Hk51ng 16 rG5965', 
detran: 'Pernambuco', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000003', nContrato: '7456453', gestora: '', 
credora:'Caixa Econômica Federal', documento: '92.424.042/0001-78', chassi: '56U H7A0G0 A8 1C7524', 
detran: 'Pernambuco',  tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000001', nContrato: '8454423', gestora: 'B3', 
credora:'ITAU', documento: '14.289.910/0001-40',chassi: '8eV 2Ry3wy v2 094788', 
detran: 'Piauí', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000002', nContrato: '9875234', gestora: '', 
credora:'Bradesco', documento: '15.404.746/0001-38', chassi: '4b2 Hk51ng 16 rG5965', 
detran: 'Pernambuco', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000003', nContrato: '7456453', gestora: '', 
credora:'Caixa Econômica Federal', documento: '92.424.042/0001-78', chassi: '56U H7A0G0 A8 1C7524', 
detran: 'Pernambuco',  tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000001', nContrato: '8454423', gestora: 'B3', 
credora:'ITAU', documento: '14.289.910/0001-40',chassi: '8eV 2Ry3wy v2 094788', 
detran: 'Piauí', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000002', nContrato: '9875234', gestora: '', 
credora:'Bradesco', documento: '15.404.746/0001-38', chassi: '4b2 Hk51ng 16 rG5965', 
detran: 'Pernambuco', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000003', nContrato: '7456453', gestora: '', 
credora:'Caixa Econômica Federal', documento: '92.424.042/0001-78', chassi: '56U H7A0G0 A8 1C7524', 
detran: 'Pernambuco',  tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000001', nContrato: '8454423', gestora: 'B3', 
credora:'ITAU', documento: '14.289.910/0001-40',chassi: '8eV 2Ry3wy v2 094788', 
detran: 'Piauí', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000002', nContrato: '9875234', gestora: '', 
credora:'Bradesco', documento: '15.404.746/0001-38', chassi: '4b2 Hk51ng 16 rG5965', 
detran: 'Pernambuco', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000003', nContrato: '7456453', gestora: '', 
credora:'Caixa Econômica Federal', documento: '92.424.042/0001-78', chassi: '56U H7A0G0 A8 1C7524', 
detran: 'Pernambuco',  tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000001', nContrato: '8454423', gestora: 'B3', 
credora:'ITAU', documento: '14.289.910/0001-40',chassi: '8eV 2Ry3wy v2 094788', 
detran: 'Piauí', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000002', nContrato: '9875234', gestora: '', 
credora:'Bradesco', documento: '15.404.746/0001-38', chassi: '4b2 Hk51ng 16 rG5965', 
detran: 'Pernambuco', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000003', nContrato: '7456453', gestora: '', 
credora:'Caixa Econômica Federal', documento: '92.424.042/0001-78', chassi: '56U H7A0G0 A8 1C7524', 
detran: 'Pernambuco',  tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000001', nContrato: '8454423', gestora: 'B3', 
credora:'ITAU', documento: '14.289.910/0001-40',chassi: '8eV 2Ry3wy v2 094788', 
detran: 'Piauí', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000002', nContrato: '9875234', gestora: '', 
credora:'Bradesco', documento: '15.404.746/0001-38', chassi: '4b2 Hk51ng 16 rG5965', 
detran: 'Pernambuco', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000003', nContrato: '7456453', gestora: '', 
credora:'Caixa Econômica Federal', documento: '92.424.042/0001-78', chassi: '56U H7A0G0 A8 1C7524', 
detran: 'Pernambuco',  tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000001', nContrato: '8454423', gestora: 'B3', 
credora:'ITAU', documento: '14.289.910/0001-40',chassi: '8eV 2Ry3wy v2 094788', 
detran: 'Piauí', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000002', nContrato: '9875234', gestora: '', 
credora:'Bradesco', documento: '15.404.746/0001-38', chassi: '4b2 Hk51ng 16 rG5965', 
detran: 'Pernambuco', tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },

{id: '000003', nContrato: '7456453', gestora: '', 
credora:'Caixa Econômica Federal', documento: '92.424.042/0001-78', chassi: '56U H7A0G0 A8 1C7524', 
detran: 'Pernambuco',  tRegistro: 'R$ 239,00', dataRegistro: '28/02/2020'  },
];

    dtOptions: DataTables.Settings = {};
  constructor() { }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
   
  }

}
