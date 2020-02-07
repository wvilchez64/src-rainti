import { Component, OnInit, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { ContractAddService } from '../../contract/contract-services/contract-add.service';
import { Location } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ToastrService } from 'ngx-toastr'
import { utilsBr } from 'js-brasil';


import { FileUploader } from 'ng2-file-upload';
import { AuthService } from "../../system-access/system-access-services/auth.service";
import { Injector } from '@angular/core';
//import { ContractFileUploadService } from '../../contract/contract-services/contract-file-upload.service';

@Component({
  selector: 'app-contract-add',
  templateUrl: './contract-add.component.html',
  styleUrls: ['./contract-add.component.css']
})

export class ContractAddComponent implements OnInit {
  public cpfcnpjActiveConsumer ='cpf';
  public cpfcnpjActive ='cpf';
  public MASKS = utilsBr.MASKS;

  //ContractData devem ter a ordem das tab da tela e a ordem que sao mostrada na tela
  //ContractData tem campos que nao vao a ser mostrado no resumen, por isso estao de ultimos //special
  _contractLoad = false
  _summaryLoad = false
  _creditorsLoad = false
  _detransLoad = false
  _statesLoad = false
  _speciesLoad = false
  _yearsLoad = false
  _brandsLoad = false
  _modelsLoad = false
  _modelYearsLoad = false
  _alienTypesLoad = false
  _indexesLoad = false
  
  contractData = {

    // Credor
    creditor: '',
  
    // Detran
    detran: '',

    // Veículo
    chassi: '',
    remarkedChassi: 'NÃO',
    plate: '',
    plateState: '',
    renavam: '',
    licensingState: '',
    specie: '',
    fabricationYear: '',
    brand: '',
    model: '',
    modelYear: '',
    color: '',

    // Devedor
    buyerName: '',
    buyerEmail: '',
    buyerValue: '',
    buyerDddPhone: '',
    buyerPhone: '',
    buyerDddMobile: '',
    buyerMobile: '',
    buyerAddress: '',
    buyerStreetnumber: '',
    buyerAddresscomplement: '',
    buyerDistrict: '',
    buyerCounty: '',
    buyerState: '',
    buyerZipCode: '',
    
    // Garantidor
    guarantor: '',
    guarantorValue: '',

    // Contrato
    contract: '',
    contractDate:'',
    alienType:'',
    restrictionNumber:'',
    totalDebitAmount: '',
    numberOfInstallments: '',
    installmentValue: '',
    iofAmount: '',
    contractRegistrationAmount: '',
    interestRatePerMonth:'',
    interestRatePerYear: '',
    interestRate: '',
    dailyInterestRate:'',
    index: '',
    paymentStartDate: '',
    paymentEndDate: '',
    releaseDate:'',
    releaseState:'',
    releaseCity: '',
    consortiumGroupNumber: '',
    consortiumQuotaNumber: '',

    //Special
    chassiConfirmation: '',
    buyerType: 'cpf',
    guarantorType: 'cpf',
    detranId: 0,
    creditorId: 0,
    buyerStateId: 0,
    plateStateId: 0,
    licensingStateId: 0,
    specieId: 0,
    alienTypeId: 0,
    indexId: 0,
    releaseStateId: 0,
  }
  
  _errorMessage = ''
  _createdMessage = ''
  _arraySearch = []

  _brandId: 0
  _modelId: 0
  _modelYearId: 0

  _detrans : Array<any> = []
  _creditors: Array<any>=[];
  _buyerStates: Array<any>=[];
  _plateStates: Array<any>=[];
  _licensingStates: Array<any>=[];
  _alienTypes : Array<any> = []; 
  _indexes: Array<any>=[];
  _species: Array<any>=[]; 
  _fabricationYears: Array<any>=[];
  _modelYears: Array<any>=[];
  _brands: Array<any>=[];
  _models: Array<any>=[];
  _releaseStates : Array<any> = [];
  _credor = [];
  _veiculo = []; 
  _devedor = []; 
  _garantidor = []; 
  _contrato = [];

  detransHasError = true
  creditorsHasError = true
  buyerStatesHasError = true
  plateStatesHasError = true
  licensingStatesHasError = true
  alienTypesHasError = true
  indexesHasError = true
  speciesHasError = true
  fabricationYearsHasError = true
  modelYearsHasError = true
  brandsHasError = true
  modelsHasError = true
  releaseStatesHasError = true

  _activeTab = "nav-credor"
  _guarantorType = 'cpf'
  _buyerType = 'cpf'
  
  dddHasError = true

  staticAlertClosed = false;
  successMessage: string;
  
  constructor(
    private _contractAddService: ContractAddService,
    //private _contractFileUploadService: ContractFileUploadService,
    private _router: Router,
    private _location: Location,
    private toastr: ToastrService
  ) { }

  validateDetrans(value) {
    this.detransHasError = false;
    if (value === 'default') {
      this.detransHasError = true;
    } else {
      this.contractData.detranId = this.findId(this._detrans, value)
    }
  }
  validateCreditors(value) {
  this.creditorsHasError = false;
  if (value === 'default') {
      this.creditorsHasError = true;
    } else {
      this.contractData.creditorId = this.findId(this._creditors, value)
    }
  }
  validateBuyerStates(value) {
    this.buyerStatesHasError = false;
    if (value === 'default') {
        this.buyerStatesHasError = true;
    } else {
      this.contractData.buyerStateId = this.findId(this._buyerStates, value)
    }
  }
  validatePlateStates(value) {
    this.plateStatesHasError = false;
    if (value === 'default') {
        this.plateStatesHasError = true;
    } else {
      this.contractData.plateStateId = this.findId(this._plateStates, value)
    }
  }  
  validateLicensingStates(value) {
    this.licensingStatesHasError = false;
    if (value === 'default') {
        this.licensingStatesHasError = true;
    } else {
      this.contractData.licensingStateId = this.findId(this._licensingStates, value)
    }
  }  
  validateAlienTypes(value) {
    this.alienTypesHasError = false;
    if (value === 'default') {
       this.alienTypesHasError = true;
     } else {
      this.contractData.alienTypeId = this.findId(this._alienTypes, value)
     }
  }
  validateIndexes(value) {
    this.indexesHasError = false;
    if (value === 'default') {
       this.indexesHasError = true;
     } else {
      this.contractData.indexId = this.findId(this._indexes, value)
     }
  }
  validateReleaseStates(value) {
    this.releaseStatesHasError = false;
    if (value === 'default') {
       this.releaseStatesHasError = true;
     } else {
      this.contractData.releaseStateId = this.findId(this._releaseStates, value)
     }
  }
  validateSpecies(value) {
    this.speciesHasError = false;
    if (value === 'default') {
       this.speciesHasError = true;
     } else {
      this.contractData.specieId = this.findId(this._species, value)
     }
  }
  validateFabricationYears(value) {
    this.fabricationYearsHasError = false;
    if (value === 'default') {
       this.fabricationYearsHasError = true;
     } 
  }
  validateBrands(e, value) {
    this.brandsHasError = false;
    if (value === 'default') {
       this.brandsHasError = true;
     } else {
       if (e.type == "change") {
          this._brandId = this.findId(this._brands, value)
          this.getModels(this._brandId)
       }
     }
  }  
  validateModels(e, value) {
    this.modelsHasError = false;
    if (value === 'default') {
       this.modelsHasError = true;
     } else {
       if (e.type == "change") {
          this._modelId = this.findId(this._models, value)
          this.getModelYears(this._brandId, this._modelId)
        }
    }
  }
  validateModelYears(value) {
    this.modelYearsHasError = false;
    if (value === 'default') {
       this.modelYearsHasError = true;
    } 
  } 

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    this._detransLoad = true
    this._contractAddService.getDetrans()
    .subscribe(
      res => {
          console.log(res)
          this._detrans = res
          this._detransLoad = false
        },
        error => {
          this._detransLoad = false
          console.log(error)
          this._errorMessage = error.error 
        }
    )   
    this._creditorsLoad = true
    this._contractAddService.getCreditors()
    .subscribe(
      res => {
        console.log(res)
        this._creditors = res;   
        this._creditorsLoad = false
      },
      error => {
          this._creditorsLoad = false
          console.log(error)
          this._errorMessage = error.error
        }
    )  
    this._statesLoad = true
    this._contractAddService.getStates()
    .subscribe(
      res => {
        console.log(res)
        this._buyerStates = res
        this._plateStates = res
        this._releaseStates = res
        this._licensingStates = res
        this._statesLoad = false
      },
      error => {
        this._statesLoad = false
        console.log(error)
        this._errorMessage = error.error }
    )
    this._alienTypesLoad = true
    this._contractAddService.getAlienTypes()
    .subscribe(
      res => {
        console.log(res)
        this._alienTypes = res
        this._alienTypesLoad = false
      },
      error => {
        this._alienTypesLoad = false
        console.log(error)
        this._errorMessage = error.error }
    )
    this._indexesLoad = true
    this._contractAddService.getIndexes()
    .subscribe(
      res => {
        console.log(res)
        this._indexes = res
        this._indexesLoad = false
      },
      error => {
        this._indexesLoad = false
        console.log(error)
        this._errorMessage = error.error }
    )
    this._yearsLoad = true
    this._contractAddService.getYears()
    .subscribe(
      res => {
        console.log(res)
        this._modelYears = res
        this._fabricationYears = res
        this._yearsLoad = false
      },
      error => {
        this._yearsLoad = false
        console.log(error)
        this._errorMessage = error.error }
    )
    this._speciesLoad = true
    this._contractAddService.getSpecies()
    .subscribe(
      res => {
        console.log(res)
        this._species = res
        this._speciesLoad = false
      },
      error => {
        this._speciesLoad = false
        console.log(error)
        this._errorMessage = error.error }
    )
    this._brandsLoad = true
    this._contractAddService.getBrands()
    .subscribe(
      res => {
          console.log(res)
          this._brands = res
          this._models = []
          this._modelYears = []
          this._brandsLoad = false
        },
        error => {
          this._brandsLoad = false
          console.log(error)
          this._brands = []
          this._models = []
          this._modelYears = []
          this._errorMessage = error.error 
        }
    )   
  }
  
  nextTab(tab) {
    this._activeTab = tab;
  }

  findId(array, value) {
    if (!value) {
      return -1  
    }        
    let id = array.map(p => {return p.description}).indexOf(value)
    return array[id].id
  }

  getModels(brandId) {
    this._modelId = 0
    this._modelYearId = 0
    this.contractData.model = ''
    this.contractData.modelYear = ''
    this._modelsLoad = true
    this._contractAddService.getModels(brandId)
    .subscribe(
      res => {
          console.log(res)
          this._models = res
          this._modelYears = []
          this._modelsLoad = false
        },
        error => {console.log(error)
          this._modelsLoad = false
          this._models = []
          this._modelYears = []
          this._errorMessage = error.error 
        }
    )   
  }

  getModelYears(brandId, modelId) {
    this._modelYearId = 0
    this.contractData.modelYear = ''
    this._modelYearsLoad = true
    this._contractAddService.getModelYears(brandId, modelId)
    .subscribe(
      res => {
          console.log(res)
          this._modelYears = res
          this._modelYearsLoad = false
        },
        error => {console.log(error)
          this._modelYearsLoad = false
          this._modelYears = []
          this._errorMessage = error.error 
        }
    )  
  }

  cpfCnpjSelect(origin: string, type: string) {
    if (origin == 'guarantor') {
      this._guarantorType = type
      this.contractData.guarantorValue = ''
    }
    if (origin == 'buyer') {
      this._buyerType = type
      this.contractData.buyerValue = ''
    }
  }
 
  chassiSelect(value) {
    this.contractData.remarkedChassi = value
  }

  createSummary(){
    let pos = 0
    //Credor
    let _credorResumem = ["Credor: ", "Detran: "]
    this._credor = this.getSummary(_credorResumem, pos, '')
    pos = pos + _credorResumem.length

    //Veiculo
    let _veiculoResumem = ["Chassi: ", "Chassi Remarcado: ", "Placa: ", "UF da placa: ", 
                           "Renavan: ", "UF Licenciamento: ", "Espécie: ", "Ano de Fabricação: ",
                           "Marca: ", "Modelo: ", "Ano do modelo: ", "Cor: "]    
    this._veiculo = this.getSummary(_veiculoResumem, pos, '')
    pos = pos + _veiculoResumem.length

    //Devedor
    let _devedorResumem = ["Nome completo: ", "E-mail: ", "REPLACE", "Ddd Telefone: ", 
                           "Telefone: ", "Ddd Celular: ", "Celular: ", "Logradouro: ",
                           "Número: ", "Complemento: ", "Bairro: ", "Município: ", "Estado: ", "Cep: "]
    this._devedor = this.getSummary(_devedorResumem, pos, this._buyerType)
    pos = pos + _devedorResumem.length

    // Garantidor
    let _garantidorResumem = ["Nome do Garantidor: ", "REPLACE"]
    this._garantidor = this.getSummary(_garantidorResumem, pos, this._guarantorType)
    pos = pos + _garantidorResumem.length

    // Contrato
    let _contratoResumem = ["Contrato: ", "Data do Contrato: ", "Tipo de Gravame: ", "Núm. da restrição: ", 
                            "Valor financiamento: ", "Parcelas: ", "Valor da Parcela: ", "Valor do IOF: ", 
                            "Valor do Registro de Contrato: ", "Taxa Juros ao mês: ", "Taxa Juros ao ano: ", 
                            "Taxa Juros de Multa: ", "Taxa de mora ao dia: ", "Indice: ", "Data primer pagamento: ",
                            "Data ultimo pagamento: ", "Data da liberação: ", "UF da liberação: ", "Cidade da liberação: ",
                            "Núm. grupo do consórcio: ", "Núm. cota do consórcio: "]
    this._contrato = this.getSummary(_contratoResumem, pos, '')
 }
  
  getSummary(summary, pos, newText){
    let _values = Object.values(this.contractData)
    let i = 0
    let newDescrition
    let newValue
    let array = []
    for (; i < summary.length; i++) {
      newDescrition = (summary[i] == "REPLACE") ? newText.toUpperCase() : summary[i]
      newValue = (_values[pos] == null) ? '' : _values[pos]
      array.push({"description" : newDescrition, "value" : newValue})
      pos = pos + 1
    }
    return array
  }

  backToContract(){
    this._location.back()
  }

  createContract(){
    this.contractData.guarantorType = this._guarantorType
    this.contractData.buyerType = this._buyerType
    this._contractLoad = true
    this._contractAddService.createContract(this.contractData)
       .subscribe(
         res => {
          this._createdMessage = 'Contrato Adicionado'
          this._contractLoad = false
          this.toastr.success('Contrato adicionado com sucesso')
          this._router.navigate(['/contratos'])
        },
         error => {
           this._contractLoad = false
           console.log(error)
           this._errorMessage ='Erro ao salvar contrato'
           this.toastr.error('Falha ao registrar contrato')
          }
           
         )  
  }
  validateDetrans(value) {
    this.detransHasError = false;
    if (value === 'default') {
      this.detransHasError = true;
    } else {
      this.contractData.detranId = this.findId(this._detrans, value)
    }
  }
  validateCreditors(value) {
  this.creditorsHasError = false;
  if (value === 'default') {
      this.creditorsHasError = true;
    } else {
      this.contractData.creditorId = this.findId(this._creditors, value)
    }
  }
  validateBuyerStates(value) {
    this.buyerStatesHasError = false;
    if (value === 'default') {
        this.buyerStatesHasError = true;
    } else {
      this.contractData.buyerStateId = this.findId(this._buyerStates, value)
    }
  }
  validatePlateStates(value) {
    this.plateStatesHasError = false;
    if (value === 'default') {
        this.plateStatesHasError = true;
    } else {
      this.contractData.plateStateId = this.findId(this._plateStates, value)
    }
  }  
  validateLicensingStates(value) {
    this.licensingStatesHasError = false;
    if (value === 'default') {
        this.licensingStatesHasError = true;
    } else {
      this.contractData.licensingStateId = this.findId(this._licensingStates, value)
    }
  }  
  validateAlienTypes(value) {
    this.alienTypesHasError = false;
    if (value === 'default') {
       this.alienTypesHasError = true;
     } else {
      this.contractData.alienTypeId = this.findId(this._alienTypes, value)
     }
  }
  validateIndexes(value) {
    this.indexesHasError = false;
    if (value === 'default') {
       this.indexesHasError = true;
     } else {
      this.contractData.indexId = this.findId(this._indexes, value)
     }
  }
  validateReleaseStates(value) {
    this.releaseStatesHasError = false;
    if (value === 'default') {
       this.releaseStatesHasError = true;
     } else {
      this.contractData.releaseStateId = this.findId(this._releaseStates, value)
     }
  }
  validateSpecies(value) {
    this.speciesHasError = false;
    if (value === 'default') {
       this.speciesHasError = true;
     } else {
      this.contractData.specieId = this.findId(this._species, value)
     }
  }
  validateFabricationYears(value) {
    this.fabricationYearsHasError = false;
    if (value === 'default') {
       this.fabricationYearsHasError = true;
     } 
  }
  validateBrands(e, value) {
    this.brandsHasError = false;
    if (value === 'default') {
       this.brandsHasError = true;
     } else {
       if (e.type == "change") {
          this._brandId = this.findId(this._brands, value)
          this.getModels(this._brandId)
       }
     }
  }  
  validateModels(e, value) {
    this.modelsHasError = false;
    if (value === 'default') {
       this.modelsHasError = true;
     } else {
       if (e.type == "change") {
          this._modelId = this.findId(this._models, value)
          this.getModelYears(this._brandId, this._modelId)
        }
    }
  }
  validateModelYears(value) {
    this.modelYearsHasError = false;
    if (value === 'default') {
       this.modelYearsHasError = true;
    } 
  } 
}
