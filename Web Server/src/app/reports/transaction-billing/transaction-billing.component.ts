import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';


@Component({
  selector: 'app-transaction-billing',
  templateUrl: './transaction-billing.component.html',
  styleUrls: ['./transaction-billing.component.css']
})
export class TransactionBillingComponent implements OnInit {

  filter: string[] =['semFiltros'];
  dataAte: any[];
  dataDe: any[];
  detranList: string[] = ['Acre', 'Pernambuco', 'Bahia'];

  registro: any[] =[11 + 11];


  gestoraList: any[] = ['ITAU', 'Santander', 'CaixaEconômica'];

    
  dataTransactionBilling: any[]= [
   	
    				
    {nContrato: '784568', gestora: 'ITAU', credora: 'ITAUA', chassi: '5MNGWKTUN1ZAF267', detran: 'Acre', tRegistro: '	13, 00	', dataRegistro: '	28/02/2020	', status: 'Novocontrato'}, 
    {nContrato: '784636', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '8ZNT2JEY0LF346944', detran: 'Alagoas', tRegistro: '	159, 00	', dataRegistro: '	11/03/2020	', status: 'Aditivo'}, 
    {nContrato: '784636', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '8ZNT2JEY0LF346944', detran: 'Alagoas', tRegistro: '	159, 00	', dataRegistro: '	01/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784570', gestora: 'ITAU', credora: 'ITAUC', chassi: '2DJ8BFPB0FF8R9977', detran: 'Amapá', tRegistro: '	179, 00	', dataRegistro: '	02/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784625', gestora: 'ITAU', credora: 'ITAUC', chassi: '56UH7A0G0A81C7532', detran: 'Amapá', tRegistro: '	179, 00	', dataRegistro: '	03/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784637', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '9DJ8BFPB0FF8R9980', detran: 'Amapá', tRegistro: '	179, 00	', dataRegistro: '	04/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784637', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '9DJ8BFPB0FF8R9980', detran: 'Amapá', tRegistro: '	179, 00	', dataRegistro: '	14/03/2020	', status: 'Aditivo'}, 
    {nContrato: '784626', gestora: 'Santander', credora: 'SantanderB', chassi: '6WAJDN0Z7LPMB7767', detran: 'Amazonas', tRegistro: '	199, 00	', dataRegistro: '	06/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784638', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '1ZNT2JEY0LF346943', detran: 'Amazonas', tRegistro: '	199, 00	', dataRegistro: '	07/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784638', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '1ZNT2JEY0LF346943', detran: 'Amazonas', tRegistro: '	199, 00	', dataRegistro: '	10/03/2020	', status: 'Aditivo'}, 
    {nContrato: '784627', gestora: 'Bradesco', credora: 'BradescoB', chassi: '9DJ8BFPB0FF8R9987', detran: 'Bahia', tRegistro: '	230, 00	', dataRegistro: '	09/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784639', gestora: 'ITAU', credora: 'ITAUC', chassi: '9DJ8BFPB0FF8R9981', detran: 'Bahia', tRegistro: '	230, 00	', dataRegistro: '	28/02/2020	', status: 'Novocontrato'}, 
    {nContrato: '784655', gestora: 'Santander', credora: 'SantanderB', chassi: '56UH7A0G0A81C7531', detran: 'Bahia', tRegistro: '	230, 00	', dataRegistro: '	29/02/2020	', status: 'Novocontrato'}, 
    {nContrato: '784573', gestora: 'Santander', credora: 'SantanderA', chassi: '5MNGWKTUN1ZAF2683', detran: 'Ceará', tRegistro: '	200, 00	', dataRegistro: '	01/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784628', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '434KUZ9MBD3GY1330', detran: 'Ceará', tRegistro: '	200, 00	', dataRegistro: '	02/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784640', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '5MNGWKTUN1ZAF2682', detran: 'Ceará', tRegistro: '	200, 00	', dataRegistro: '	03/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784574', gestora: 'ITAU', credora: 'ITAUB', chassi: '6WAJDN0Z7LPMB7765', detran: 'DistritoFederal', tRegistro: '	239, 00	', dataRegistro: '	15/03/2020	', status: 'Aditivo'}, 
    {nContrato: '784574', gestora: 'ITAU', credora: 'ITAUB', chassi: '6WAJDN0Z7LPMB7765', detran: 'DistritoFeAderal', tRegistro: '	239, 00	', dataRegistro: '	05/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784595', gestora: 'ITAU', credora: 'ITAUD', chassi: '335KUZ9MBD3GY1330', detran: 'DistritoFederal', tRegistro: '	239, 00	', dataRegistro: '	06/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784612', gestora: 'Bradesco', credora: 'BradescoB', chassi: '436KUZ9MBD3GY1330', detran: 'DistritoFederal', tRegistro: '	239, 00	', dataRegistro: '	07/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784629', gestora: 'Bradesco', credora: 'BradescoB', chassi: '2DJ8BFPB0FF8R9984', detran: 'DistritoFederal', tRegistro: '	239, 00	', dataRegistro: '	08/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784641', gestora: 'ITAU', credora: 'ITAUC', chassi: '6WAJDN0Z7LPMB7762', detran: 'DistritoFederal', tRegistro: '	239, 00	', dataRegistro: '	09/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784664', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '1NEXLN3CW6WPL4151', detran: 'DistritoFederal', tRegistro: '	239, 00	', dataRegistro: '	09/03/2020	', status: 'Aditivo'}, 
    {nContrato: '784664', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '1NEXLN3CW6WPL4151', detran: 'DistritoFederal', tRegistro: '	239, 00	', dataRegistro: '	29/02/2020	', status: 'Novocontrato'}, 
    {nContrato: '784575', gestora: 'ITAU', credora: 'ITAUB', chassi: '7Z66RUL7XADVN1630', detran: 'EspíritoSanto ', tRegistro: '	233, 00	', dataRegistro: '	01/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784596', gestora: 'ITAU', credora: 'ITAUC', chassi: '1ZNT2JEY0LF346946', detran: 'EspíritoSanto ', tRegistro: '	233, 00	', dataRegistro: '	02/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784613', gestora: 'ITAU', credora: 'ITAUF', chassi: '1ZNT2JEY0LF346948', detran: 'EspíritoSanto ', tRegistro: '	233, 00	', dataRegistro: '	03/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784630', gestora: 'Bradesco', credora: 'BradescoB', chassi: '56UH7A0G0A81C7533', detran: 'EspíritoSanto ', tRegistro: '	233, 00	', dataRegistro: '	04/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784642', gestora: 'Santander', credora: 'SantanderB', chassi: '335KUZ9MBD3GY1330', detran: 'EspíritoSanto ', tRegistro: '	233, 00	', dataRegistro: '	05/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784658', gestora: 'ITAU', credora: 'ITAUK', chassi: '8ZNT2JEY0LF346940', detran: 'EspíritoSanto ', tRegistro: '	233, 00	', dataRegistro: '	06/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784665', gestora: 'ITAU', credora: 'ITAUC', chassi: '433KUZ9MBD3GY1330', detran: 'EspíritoSanto ', tRegistro: '	233, 00	', dataRegistro: '	07/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784576', gestora: 'ITAU', credora: 'ITAUB', chassi: '8ZNT2JEY0LF346943', detran: 'Goiás', tRegistro: '	122, 00	', dataRegistro: '	08/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784597', gestora: 'Santander', credora: 'SantanderB', chassi: '9DJ8BFPB0FF8R9984', detran: 'Goiás', tRegistro: '	122, 00	', dataRegistro: '	09/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784614', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '5MNGWKTUN1ZAF2684', detran: 'Goiás', tRegistro: '	122, 00	', dataRegistro: '	10/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784631', gestora: 'ITAU', credora: 'ITAUG', chassi: '6WAJDN0Z7LPMB7768', detran: 'Goiás', tRegistro: '	122, 00	', dataRegistro: '	11/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784631', gestora: 'ITAU', credora: 'ITAUG', chassi: '6WAJDN0Z7LPMB7768', detran: 'Goiás', tRegistro: '	122, 00	', dataRegistro: '	21/03/2020	', status: 'Aditivo'}, 
    {nContrato: '784659', gestora: 'ITAU', credora: 'ITAUK', chassi: '4AKS0VNBTHDA11904', detran: 'Goiás', tRegistro: '	122, 00	', dataRegistro: '	13/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784666', gestora: 'Santander', credora: 'SantanderB', chassi: '2DJ8BFPB0FF8R9983', detran: 'Goiás', tRegistro: '	122, 00	', dataRegistro: '	14/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784577', gestora: 'ITAU', credora: 'ITAUB', chassi: '4AKS0VNBTHDA11907', detran: 'Maranhão', tRegistro: '	144, 00	', dataRegistro: '	15/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784598', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaB', chassi: '336KUZ9MBD3GY1330', detran: 'Maranhão', tRegistro: '	144, 00	', dataRegistro: '	16/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784615', gestora: 'Santander', credora: 'SantanderB', chassi: '6WAJDN0Z7LPMB7764', detran: 'Maranhão', tRegistro: '	144, 00	', dataRegistro: '	17/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784632', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '1ZNT2JEY0LF346942', detran: 'Maranhão', tRegistro: '	144, 00	', dataRegistro: '	18/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784644', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '435KUZ9MBD3GY1330', detran: 'Maranhão', tRegistro: '	144, 00	', dataRegistro: '	19/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784660', gestora: 'Bradesco', credora: 'BradescoB', chassi: '1NEXLN3CW6WPL4150', detran: 'Maranhão', tRegistro: '	144, 00	', dataRegistro: '	20/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784599', gestora: 'ITAU', credora: 'ITAUC', chassi: '8ZNT2JEY0LF346945', detran: 'MatoGrosso', tRegistro: '	188, 00	', dataRegistro: '	22/03/2020	', status: 'Aditivo'}, 
    {nContrato: '784578', gestora: 'ITAU', credora: 'ITAUB', chassi: '7Z66RUL7XADVN1633', detran: 'MatoGrosso', tRegistro: '	188, 00	', dataRegistro: '	11/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784599', gestora: 'ITAU', credora: 'ITAUC', chassi: '8ZNT2JEY0LF346945', detran: 'MatoGrosso', tRegistro: '	188, 00	', dataRegistro: '	12/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784616', gestora: 'Bradesco', credora: 'BradescoB', chassi: '337KUZ9MBD3GY1330', detran: 'MatoGrosso', tRegistro: '	188, 00	', dataRegistro: '	13/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784633', gestora: 'ITAU', credora: 'ITAUG', chassi: '9DJ8BFPB0FF8R9980', detran: 'MatoGrosso', tRegistro: '	188, 00	', dataRegistro: '	14/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784645', gestora: 'ITAU', credora: 'ITAUC', chassi: '1ZNT2JEY0LF346947', detran: 'MatoGrosso', tRegistro: '	188, 00	', dataRegistro: '	15/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784661', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '6601U3634EWXA9635', detran: 'MatoGrosso', tRegistro: '	188, 00	', dataRegistro: '	16/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784579', gestora: 'ITAU', credora: 'ITAUC', chassi: '8ZNT2JEY0LF346946', detran: 'MatoGrossodoSul', tRegistro: '	188, 00	', dataRegistro: '	17/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784579', gestora: 'ITAU', credora: 'ITAUC', chassi: '8ZNT2JEY0LF346946', detran: 'MatoGrossodoSul', tRegistro: '	188, 00	', dataRegistro: '	27/03/2020	', status: 'Aditivo'}, 
    {nContrato: '784617', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '1ZNT2JEY0LF346948', detran: 'MatoGrossodoSul', tRegistro: '	188, 00	', dataRegistro: '	19/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784592', gestora: 'ITAU', credora: 'ITAUC', chassi: '7Z66RUL7XADVN1629', detran: 'SãoPaulo', tRegistro: '	239, 00	', dataRegistro: '	01/06/2020	', status: 'Aditivo'}, 
    {nContrato: '784580', gestora: 'Santander', credora: 'SantanderB', chassi: '6661U3634EWXA9635', detran: 'MinasGerais', tRegistro: '	188, 00	', dataRegistro: '	10/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784601', gestora: 'Bradesco', credora: 'BradescoA', chassi: '1ZNT2JEY0LF346944', detran: 'MinasGerais', tRegistro: '	188, 00	', dataRegistro: '	11/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784618', gestora: 'Bradesco', credora: 'BradescoB', chassi: '7Z66RUL7XADVN1629', detran: 'MinasGerais', tRegistro: '	188, 00	', dataRegistro: '	12/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784635', gestora: 'ITAU', credora: 'ITAUC', chassi: '335KUZ9MBD3GY1330', detran: 'MinasGerais', tRegistro: '	188, 00	', dataRegistro: '	13/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784602', gestora: 'Bradesco', credora: 'BradescoB', chassi: '9DJ8BFPB0FF8R9982', detran: 'Pará ', tRegistro: '	237, 00	', dataRegistro: '	25/03/2020	', status: 'Aditivo'}, 
    {nContrato: '784602', gestora: 'Bradesco', credora: 'BradescoB', chassi: '9DJ8BFPB0FF8R9982', detran: 'Pará ', tRegistro: '	237, 00	', dataRegistro: '	15/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784619', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '9DJ8BFPB0FF8R9985', detran: 'Pará ', tRegistro: '	237, 00	', dataRegistro: '	16/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784582', gestora: 'Bradesco', credora: 'BradescoB', chassi: '4AKS0VNBTHDA11910', detran: 'Paraíba', tRegistro: '	211, 00	', dataRegistro: '	17/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784603', gestora: 'Bradesco', credora: 'BradescoA', chassi: '1ZNT2JEY0LF346945', detran: 'Paraíba', tRegistro: '	211, 00	', dataRegistro: '	18/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784620', gestora: 'Bradesco', credora: 'BradescoB', chassi: '1ZNT2JEY0LF346949', detran: 'Paraíba', tRegistro: '	211, 00	', dataRegistro: '	19/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784646', gestora: 'Santander', credora: 'SantanderB', chassi: '5MNGWKTUN1ZAF2683', detran: 'Paraíba', tRegistro: '	211, 00	', dataRegistro: '	20/03/2020	', status: 'Novocontrato'}, 
    {nContrato: '784583', gestora: 'Bradesco', credora: 'BradescoA', chassi: '56UH7A0G0A81C7532', detran: 'Paraná ', tRegistro: '	211, 00	', dataRegistro: '	03/04/2020	', status: 'Novocontrato'}, 
    {nContrato: '784604', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '9DJ8BFPB0FF8R9983', detran: 'Paraná ', tRegistro: '	211, 00	', dataRegistro: '	04/04/2020	', status: 'Novocontrato'}, 
    {nContrato: '784621', gestora: 'ITAU', credora: 'ITAUF', chassi: '5MNGWKTUN1ZAF2686', detran: 'Paraná ', tRegistro: '	211, 00	', dataRegistro: '	05/04/2020	', status: 'Novocontrato'}, 
    {nContrato: '784647', gestora: 'Santander', credora: 'SantanderB', chassi: '336KUZ9MBD3GY1330', detran: 'Paraná ', tRegistro: '	211, 00	', dataRegistro: '	06/04/2020	', status: 'Novocontrato'}, 
    {nContrato: '784584', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '56UH7A0G0A81C7533', detran: 'Pernambuco', tRegistro: '	211, 00	', dataRegistro: '	07/04/2020	', status: 'Novocontrato'}, 
    {nContrato: '784605', gestora: 'ITAU', credora: 'ITAUC', chassi: '7Z66RUL7XADVN1630', detran: 'Pernambuco', tRegistro: '	211, 00	', dataRegistro: '	08/04/2020	', status: 'Novocontrato'}, 
    {nContrato: '784622', gestora: 'ITAU', credora: 'ITAUG', chassi: '9DJ8BFPB0FF8R9986', detran: 'Pernambuco', tRegistro: '	211, 00	', dataRegistro: '	09/04/2020	', status: 'Novocontrato'}, 
    {nContrato: '784648', gestora: 'Santander', credora: 'SantanderB', chassi: '6WAJDN0Z7LPMB7763', detran: 'Pernambuco', tRegistro: '	211, 00	', dataRegistro: '	10/04/2020	', status: 'Novocontrato'}, 
    {nContrato: '784623', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '433KUZ9MBD3GY1330', detran: 'Piauí', tRegistro: '	211, 00	', dataRegistro: '	23/04/2020	', status: 'Aditivo'}, 
    {nContrato: '784606', gestora: 'Santander', credora: 'SantanderB', chassi: '8ZNT2JEY0LF346946', detran: 'Piauí', tRegistro: '	211, 00	', dataRegistro: '	12/04/2020	', status: 'Novocontrato'}, 
    {nContrato: '784623', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '433KUZ9MBD3GY1330', detran: 'Piauí', tRegistro: '	211, 00	', dataRegistro: '	13/04/2020	', status: 'Novocontrato'}, 
    {nContrato: '784649', gestora: 'Santander', credora: 'SantanderB', chassi: '337KUZ9MBD3GY1330', detran: 'Piauí', tRegistro: '	211, 00	', dataRegistro: '	03/04/2020	', status: 'Novocontrato'}, 
    {nContrato: '784586', gestora: 'ITAU', credora: 'ITAUC', chassi: '434KUZ9MBD3GY1330', detran: 'RiodeJaneiro', tRegistro: '	212, 00	', dataRegistro: '	04/04/2020	', status: 'Novocontrato'}, 
    {nContrato: '784607', gestora: 'Bradesco', credora: 'BradescoA', chassi: '435KUZ9MBD3GY1330', detran: 'RiodeJaneiro', tRegistro: '	212, 00	', dataRegistro: '	05/04/2020	', status: 'Novocontrato'}, 
    {nContrato: '784624', gestora: 'ITAU', credora: 'ITAUC', chassi: '2DJ8BFPB0FF8R9983', detran: 'RiodeJaneiro', tRegistro: '	212, 00	', dataRegistro: '	06/04/2020	', status: 'Novocontrato'}, 
    {nContrato: '784650', gestora: 'ITAU', credora: 'ITAUG', chassi: '56UH7A0G0A81C7530', detran: 'RiodeJaneiro', tRegistro: '	212, 00	', dataRegistro: '	07/04/2020	', status: 'Novocontrato'}, 
    {nContrato: '784608', gestora: 'Bradesco', credora: 'BradescoB', chassi: '1ZNT2JEY0LF346947', detran: 'RioGrandedoNorte', tRegistro: '	212, 00	', dataRegistro: '	19/04/2020	', status: 'Aditivo'}, 
    {nContrato: '784608', gestora: 'Bradesco', credora: 'BradescoB', chassi: '1ZNT2JEY0LF346947', detran: 'RioGrandedoNorte', tRegistro: '	212, 00	', dataRegistro: '	09/04/2020	', status: 'Novocontrato'}, 
    {nContrato: '784651', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '6WAJDN0Z7LPMB7765', detran: 'RioGrandedoNorte', tRegistro: '	212, 00	', dataRegistro: '	10/04/2020	', status: 'Novocontrato'}, 
    {nContrato: '784588', gestora: 'Bradesco', credora: 'BradescoA', chassi: '6WAJDN0Z7LPMB7762', detran: 'RioGrandedoSul', tRegistro: '	222, 00	', dataRegistro: '	11/04/2020	', status: 'Novocontrato'}, 
    {nContrato: '784609', gestora: 'Bradesco', credora: 'BradescoA', chassi: '9DJ8BFPB0FF8R9984', detran: 'RioGrandedoSul', tRegistro: '	222, 00	', dataRegistro: '	12/04/2020	', status: 'Novocontrato'}, 
    {nContrato: '784652', gestora: 'ITAU', credora: 'ITAUG', chassi: '9DJ8BFPB0FF8R9985', detran: 'RioGrandedoSul', tRegistro: '	222, 00	', dataRegistro: '	13/04/2020	', status: 'Novocontrato'}, 
    {nContrato: '784589', gestora: 'Bradesco', credora: 'BradescoB', chassi: '7Z66RUL7XADVN1628', detran: 'Rondônia', tRegistro: '	167, 00	', dataRegistro: '	17/05/2020	', status: 'Novocontrato'}, 
    {nContrato: '784610', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '7Z66RUL7XADVN1631', detran: 'Rondônia', tRegistro: '	167, 00	', dataRegistro: '	18/05/2020	', status: 'Novocontrato'}, 
    {nContrato: '784653', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '432KUZ9MBD3GY1330', detran: 'Rondônia', tRegistro: '	167, 00	', dataRegistro: '	19/05/2020	', status: 'Novocontrato'}, 
    {nContrato: '784662', gestora: 'Bradesco', credora: 'BradescoB', chassi: '8ZNT2JEY0LF346941', detran: 'Rondônia', tRegistro: '	167, 00	', dataRegistro: '	20/05/2020	', status: 'Novocontrato'}, 
    {nContrato: '784590', gestora: 'Bradesco', credora: 'BradescoA', chassi: '8ZNT2JEY0LF346944', detran: 'Roraima ', tRegistro: '	186, 00	', dataRegistro: '	21/05/2020	', status: 'Novocontrato'}, 
    {nContrato: '784590', gestora: 'Bradesco', credora: 'BradescoA', chassi: '8ZNT2JEY0LF346944', detran: 'Roraima ', tRegistro: '	186, 00	', dataRegistro: '	23/05/2020	', status: 'Aditivo'}, 
    {nContrato: '784654', gestora: 'ITAU', credora: 'ITAUC', chassi: '2DJ8BFPB0FF8R9982', detran: 'Roraima ', tRegistro: '	186, 00	', dataRegistro: '	23/05/2020	', status: 'Novocontrato'}, 
    {nContrato: '784663', gestora: 'ITAU', credora: 'ITAUG', chassi: '4AKS0VNBTHDA11905', detran: 'Roraima ', tRegistro: '	186, 00	', dataRegistro: '	24/05/2020	', status: 'Novocontrato'}, 
    {nContrato: '784591', gestora: 'CaixaEconômica', credora: 'CaixaEconômicaA', chassi: '56UH7A0G0A81C7530', detran: 'SantaCatarina', tRegistro: '	146, 00	', dataRegistro: '	25/05/2020	', status: 'Novocontrato'}, 
    {nContrato: '784592', gestora: 'ITAU', credora: 'ITAUC', chassi: '7Z66RUL7XADVN1629', detran: 'SãoPaulo', tRegistro: '	239, 00	', dataRegistro: '	26/05/2020	', status: 'Novocontrato'}, 
    {nContrato: '784593', gestora: 'Santander', credora: 'SantanderB', chassi: '6WAJDN0Z7LPMB7763', detran: 'Sergipe', tRegistro: '	234, 00	', dataRegistro: '	27/05/2020	', status: 'Novocontrato'}, 
    {nContrato: '784594', gestora: 'Santander', credora: 'SantanderB', chassi: '2DJ8BFPB0FF8R9983', detran: 'Tocantins', tRegistro: '	216, 00	', dataRegistro: '	28/05/2020	', status: 'Novocontrato'}
                
    
    ];
  constructor( ){}

  ngOnInit() {}

  markAsActive(filter: string[]){
    this.filter = filter;

  }

  totalPrice(total: any) {
    total = 0;
    for(let data of this.registro){
      total += data.registro + data.registro;
    }
      return total;

    }
}
