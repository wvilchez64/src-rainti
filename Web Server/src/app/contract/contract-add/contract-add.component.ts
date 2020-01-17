import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contract-add',
  templateUrl: './contract-add.component.html',
  styleUrls: ['./contract-add.component.css']
})
export class ContractAddComponent implements OnInit {
   public cpfcnpjActive ='cpf';

  contractData = {

    // Credor
    creditor: '',

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
    financingType:'',
    contractForm: '',
    physicalContractNumber: '',
    TotalDebtAmount: '',
    contractRegistrationAmount: '',
    iofAmount: '',
    paymentPlace: '',
    payday: '',
    interestRatePerMonth:'',
    interestRate: '',
    dailyInterestRate:'',
    contractIndex: '',
    creditReleaseDate:'',
    contractNeighborhood: '',
    contractAddress: '',
    contractHouseNumber: '',
    contractState: '',
    contractDistrict: '',
  }

  _creditor: Array<any>=[];
  _financingType: Array<any>=[];
  _contractForm: Array<any>=[];
  _interestRate: Array<any>=[];
  _dailyInterestRate: Array<any>=[];
  _remarkedChassi: Array<any>=[];
  _plateUf:Array<any>=[];
  _brand:Array<any>=[];
  _model:Array<any>=[];


  constructor() {

  }

  ngOnInit() {

   
  }

  markAsActive(cpfcnpjActive: string){
    this.cpfcnpjActive = cpfcnpjActive;

}


}
