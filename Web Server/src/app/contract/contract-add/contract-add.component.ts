import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-add',
  templateUrl: './contract-add.component.html',
  styleUrls: ['./contract-add.component.css']
})
export class ContractAddComponent implements OnInit {
  public _activeOCRN ='registro';
  public _aditivo = false
  public _registro = true
  public _installmentValue = 0
  public cpfcnpjActiveConsumer ='cpf';
  public cpfcnpjActive ='cpf';
  contractData = {

    // Credor
    creditor: '',

    // Detran
    detran: '',

    // Comprador
    buyerName: '',
    buyerEmail: '',
    buyertype: '',
    buyerCpf: '',
    buyerCnpj: '',
    buyerDddModel: '',
    buyerDddMobile: '',
    buyerPhone: '',
    buyerMobilePhone: '',
    buyerZipCode: '',
    buyerNeighborhood: '',
    buyerAddress: '',
    buyerHouseNumber: '',
    buyerState: '',
    buyerDistrict: '',
    buyerComplement: '',
    
    // Garantidor
    responsible: '',
    responsibleType: '',
    responsibleCpf: '',
    responsibleCnpj: '',

    // Veículo
    chassi: '',
    chassiConfirmation: '',
    remarkedChassi: '',
    plate: '',
    plateUf: '',
    renavam: '',
    gravame: '',
    specie: '',
    fabriactionYear: '',
    modelYear: '',
    brand: '',
    model: '',
    color: '',

    // Contrato
    originalCRN:'',
    physicalContractNumber: '',
    contractDate:'',
    alienType:'',
    restrictionNumber:'',
    totalDebitAmount: '',
    numberOfInstallments: '',
    contractRegistrationAmount: '',
    iofAmount: '',
    interestRatePerMonth:'',
    interestRate: '',
    dailyInterestRate:'',
    contractIndex: '',
    paymentStartDate: '',
    creditReleaseDate:'',
    creditReleaseState:'',
    creditReleaseCity: '',
    consortiumGroupNumber: '',
    consortiumQuotaNumber: '',
  }

  _creditor: Array<any>=[];
  _detrans: Array<any>=[];
  _financingType: Array<any>=[];
  _contractForm: Array<any>=[];
  _interestRate: Array<any>=[];
  _dailyInterestRate: Array<any>=[];
  _remarkedChassi: Array<any>=[];
  _plateUf:Array<any>=[];
  _brand:Array<any>=[];
  _model:Array<any>=[];
  
  _paymentEndDate: any
  _creditReleaseState : Array<any> = [] 
  //creditReleaseStateHasError = true
  

  activeTab = "nav-contrato"

  constructor() {

  }

  // validateCreditReleaseState(value) {
  //   if (value === 'default') {
  //     this.creditReleaseStateHasError = true;
  //   } else {
  //     this.creditReleaseStateHasError = false;
  //   }

  // }

  ngOnInit() {

   
  }

  markAsActive(cpfcnpjActive: string){
    this.cpfcnpjActive = cpfcnpjActive;

  }

  getinstallmentValue(e) {
    this._installmentValue = parseFloat(this.contractData.totalDebitAmount) / parseInt(this.contractData.numberOfInstallments)
  }

  nextTab(activeTab) {
    this.activeTab = activeTab;
  }

  validateTopic(){}

  markAsActiveConsumer(cpfcnpjActiveConsumer: string){
    this.cpfcnpjActiveConsumer = cpfcnpjActiveConsumer;
  }

  markAsActiveOCRN(activeOCRN: string){
  this._aditivo = false
  this._registro = true
  if  (activeOCRN == 'aditivo'){
    } else {
      this._aditivo = true
      this._registro = false
    }
    this._activeOCRN = activeOCRN;  
  }

}
