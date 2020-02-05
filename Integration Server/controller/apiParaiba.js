const soap = require('soap');
const util = require('../controller/util')
//const request = require('request');

/*
const Pool = require('pg').Pool
const jsonData = require('../config/config-database.json');
const pool = new Pool({ user: jsonData.user, host: jsonData.host, database: jsonData.database, password: jsonData.password, port: jsonData.port })
*/


var endPointParaiba = 'http://prxcodata.pb.gov.br/CallWSDT/CallWSDT?wsdl';

var teste = function  (acao,jsonContrato){    
    let endpointx = 'http://www.byjg.com.br/site/webservice.php/ws/cep?WSDL';
    var args = {"cep": "04182140"};
    soap.createClient(endpointx, function(err, client) {
        console.log('a1')        
        //metodo disponivel na wsdl
        client.obterLogradouro(args, function(err, result) {            
            console.log("result=");
            console.log(result);            
            return result;
        });
    });
    return "ok";
}


    /*
    parametro de entrada é uma string com valore posicionais:
        N06 - Código do órgão 
        N07 - Login 
        A06 - Senha 
    saida:
        A03 - Código de retorno (sucesso = 000)  
        ou  
        A03 - Código de retorno A80 - Mensagem de erro
    */
    var autenticacaoParaiba =  function (acao,jsonContrato){
        
        var sInput = "";
        var sOutput = "";
        var codigoOrgao = '123';
        var login = "123456";
        var senha = "openX";

        //monta parametro de entrada
        sInput +=  util.lPad(util.nvl(codigoOrgao,""),6  ,"0");
        sInput +=  util.lPad(util.nvl(login,""),7  ,"0");
        sInput +=  util.lPad(util.nvl(senha,""),6  ," ");

        var args = {"param": sInput};
        /*
        soap.createClient(endPointParaiba, function(err, client) {
            client.operacao(args, function(err, result) {
                sOutput = result;
            });
        });
        */

        //logar integração com detran da paraiba
        //sInput
        //sOutput
        //tratar sOutput e retornar valor tratado
        return 1;
        
    }

var enviarContrato785Paraiba =  function (jsonContrato){
            
    
    console.log(JSON.stringify(jsonContrato))
    console.log('jsonContrato.sRegistroContratoOrigem=' + jsonContrato.sRegistroContratoOrigem)


    var userId = 2; //for (var key in ljson){text += 'Index is: ' + key + '\nDescription is:  ' + ljson[key] }

    //CRIA LOG DE TRANSAÇÃO DE CHAMDA PARA DETRAN
    var sSql = "insert into integration_log (contractId,apiName,flag,inputinfo,outputinfo,assinatura,userId,creationDate) values ($1, $2, $3, $4, $5, $6, $7, now()) returning id";
    var aParameter = [jsonContrato.sRegistroContratoOrigem,jsonContrato.oTransacao.nCodTransacao,jsonContrato.nFlagTransacao,'','','',userId];
    var idTransacao = null;
    
    pool.query(sSql, aParameter,function(err, result) {
        if (err){} else { 
            idTransacao =  result.rows[0].id;

            //MONTA JSON PARA ENVIO PARA O DETRAN
            

            var sInput =   "" + 
                
                //autenticacao
                util.rPad(util.nvl("?"	                                            ,""),6	,"0") + //N06 - Código do órgão 
                util.rPad(util.nvl("?"	                                            ,""),7	,"0") + //N07 - Login 
                util.rPad(util.nvl("?"	                                            ,""),6	," ") + //A06 - Senha 

                //header
                util.rPad(util.nvl(nonononono	                                    ,""),6	,"0") + //N06 - Sequencial da transação (reinicia a cada novo dia) 
                util.rPad(util.nvl("785"	                                        ,""),3	,"0") + //N03 - Código da transação (utilizar o valor 785) 
                util.rPad(util.nvl("4"	                                            ,""),1	,"0") + //N01 - Código da modalidade (utilizar o valor 4) 
                util.rPad(util.nvl("?"	                                            ,""),11	,"0") + //N11 - Código do cliente (utilizar os 11 primeiros dígitos do CNPJ da empresa) 
                util.rPad(util.nvl("PB"	                                            ,""),2	," ") + //A02 - UF de origem da transação A02 - UF de origem da transmissão 
                util.rPad(util.nvl("PB"	                                            ,""),2	," ") + //A02 - UF de destino da transmissão (utilizar o valor PB) 
                util.lPad(util.nvl("1"	                                            ,""),1	,"0") + //N01 - Tipo da condicionalidade da transação (utilizar o valor 1) 
                util.lPad(util.nvl("?"	                                            ,""),4	,"0") + //N04 - Tamanho da transação (referente a soma dos tamanhos da parte fixa e a parte variavel) 
                util.lPad(util.nvl("00"	                                            ,""),2	,"0") + //N02 - Código de retorno da transação (utilizar o valor 00) 
                util.lPad(util.nvl(util.getJulianDate() 	                        ,""),3	,"0") + //N03 - Dia juliano 

                //parametros da 785
                util.rPad(util.nvl(jsonContrato["sChassiVeiculo"]	                ,""),21	," ") + //A21 - Chassi 
                util.lPad(util.nvl(jsonContrato["nIRemarcacaoVeiculo"]	            ,""),1	,"0") + //N01 - Identificador de remarcação 
                util.rPad(util.nvl(jsonContrato["sUFLicenciamentoVeiculo"]	        ,""),2	," ") + //A02 - UF de licenciamento 
                util.rPad(util.nvl(jsonContrato["sUFPlacaVeiculo"]	                ,""),2	," ") + //A02 - UF da placa (não obrigatório) 
                util.rPad(util.nvl(jsonContrato["sPlacaVeiculo"]	                ,""),7	," ") + //A07 - Placa (não obrigatório) 
                util.lPad(util.nvl(jsonContrato["nRenavamVeiculo"]	                ,""),11	," ") + //N11 - Renavam (não obrigatório) 
                util.lPad(util.nvl(jsonContrato["nAnoFabricacaoVeiculo"]	        ,""),4	,"0") + //N04 - Ano de fabricação 
                util.lPad(util.nvl(jsonContrato["nAnoModeloVeiculo"]	            ,""),4	,"0") + //N04 - Ano do modelo 

                util.lPad(util.nvl(jsonContrato["nCodAgenteContrato"]	            ,""),12	,"0") + //N12 - Código do agente (não obrigatório) 
                util.rPad(util.nvl(jsonContrato["sNomeAgenteContrato"]	            ,""),40	," ") + //A40 - Nome do agente 
                util.lPad(util.nvl(jsonContrato["nCNPJAgenteContrato"]	            ,""),14	,"0") + //N14 - CNPJ do agente 
                util.rPad(util.nvl(jsonContrato["sNumContrato"]	                    ,""),20	," ") + //A20 - Número do contrato 
                util.lPad(util.nvl(jsonContrato["nDataContrato"]	                ,""),8	,"0") + //N08 - Data do contrato 
                util.lPad(util.nvl(jsonContrato["nQtdParcelasContrato"]	            ,""),3	,"0") + //N03 - Quantidade de parcelas 
                util.lPad(util.nvl(jsonContrato["nNumRestricaoContrato"]	        ,""),8	,"0") + //N08 - Número da restrição 
                util.lPad(util.nvl(jsonContrato["nNumTipoGravameContrato"]	        ,""),2	,"0") + //N02 - Tipo do gravame 
                util.lPad(util.nvl(jsonContrato["nCPFCNPJDevedorContrato"]	        ,""),14	,"0") + //N14 - CPF/CNPJ do devedor 
                util.rPad(util.nvl(jsonContrato["sNomeDevedorContrato"]	            ,""),40	," ") + //A40 - Nome do devedor 
                util.lPad(util.nvl(jsonContrato["nTaxaJurosMesContrato"]	        ,""),6	,"0") + //N06 - Taxa de juros ao mês (% com 3 casas decimais) (não obrigatório) 
                util.lPad(util.nvl(jsonContrato["nTaxaJurosAnoContrato"]	        ,""),6	,"0") + //N06 - Taxa de juros ao ano (% com 3 casas decimais) (não obrigatório) 
                util.rPad(util.nvl(jsonContrato["sTaxaJurosMultaContrato"]	        ,""),3	," ") + //A03 - Taxa de juros de multa (utilizar os valores SIM ou NAO) 
                util.rPad(util.nvl(jsonContrato["sTaxaMoraDiaContrato"]	            ,""),3	," ") + //A03 - Taxa de mora ao dia (utilizar os valores SIM ou NAO) 
                util.lPad(util.nvl(jsonContrato["nValorTaxaContrato"]	            ,""),9	,"0") + //N09 - Valor da taxa de contrato (2 casas decimais) (não obrigatório) 
                util.lPad(util.nvl(jsonContrato["nValorTotalFinanciamenContrato"]	,""),9	,"0") + //N09 - Valor total do financiamento (2 casas decimais)  
                util.lPad(util.nvl(jsonContrato["nValorIOFContrato"]	            ,""),9	,"0") + //N09 - Valor do IOF (2 casas decimais) (não obrigatório) 
                util.lPad(util.nvl(jsonContrato["nValorParcelaContrato"]	        ,""),9	,"0") + //N09 - Valor da parcela (2 casas decimais) (não obrigatório) 
                util.lPad(util.nvl(jsonContrato["nDataVencPrimeiraParceContrato"]	,""),8	,"0") + //N08 - Data de vencimento da primeira parcela 
                util.lPad(util.nvl(jsonContrato["nDataVencUltimaParcelaContrato"]	,""),8	,"0") + //N08 - Data de vencimento da última parcela 
                util.lPad(util.nvl(jsonContrato["nDataLiberacaoCreditoContrato"]	,""),8	,"0") + //N08 - Data da liberação do crédito 
                util.rPad(util.nvl(jsonContrato["sUFLiberacaoCreditoContrato"]	    ,""),2	," ") + //A02 - UF da liberação do crédito A25 - Cidade da liberação do crédito 
                util.rPad(util.nvl(jsonContrato["sIndicesContrato"]	                ,""),10	," ") + //A10 - Índice A06 - Número do grupo do consórcio (não obrigatório) 
                util.rPad(util.nvl(jsonContrato["nNumCotaConsorcioContrato"]	    ,""),6	," ") + //A06 - Número da cota do consórcio (não obrigatório) 
                util.rPad(util.nvl(jsonContrato["sRegistroContratoOrigem"]	        ,""),14	," ") + //A14 - Número do registro do contrato 
                util.rPad(util.nvl(jsonContrato["sNumAditivoContrato"]	            ,""),20	," ") + //A20 - Número do aditivo do contrato (não obrigatório) N08 - Data do aditivo do contrato (não obrigatório) 
                util.rPad(util.nvl(jsonContrato["sNumAditivoContratoOrigem"]	    ,""),14	," ") + //A14 - Número do registro do aditivo do contrato (não obrigatório) 
                util.lPad(util.nvl(jsonContrato["nFlagTransacao"]	                ,""),1	,"0") + //N01 - Flag da transação (1 para inclusão de contrato, 2 para alteração de contrato, 3 para inclusão de aditivo, 4 para alteração de aditivo) 
                util.rPad(util.nvl(idTransacao	                                    ,""),21	," "); //A21 - Assinatura eletrônica (chave única gerada pela empresa para posteriores verificações de segurança) 


                //ASSINATURA JSON
                var assinatura = signer.assinarDocumento(JSON.stringify(inputJson));

                //CHAMADA API DETRAN
                var detranReturnValue = ""
                try{

                    var args = {"param": sInput};

                    soap.createClient(endPointParaiba, function(err, client) {
                        client.operacao(args, function(err, result) {
                            detranReturnValue = result;
                        });
                    });

                }catch(e){
                    detranReturnValue = "Falha na comunicação com o detran"
                }

                //GRAVAR DETALHES DAS INFORMAÇÕES DO ENVIO NO LOG DA TRANSAÇÃO CRIADO
                var sSql =  'update integration_log set  inputinfo   = $1, outputinfo  = $2, assinatura  = $3, idTransacao = $4 where id = $5';
                var aParameter = [inputJson,detranReturnValue,assinatura, idTransacao, idTransacao];
                pool.query(sSql, aParameter);
            }
        });
        return 1;


        //logar transação com detran

  return inputJson;
}

var enviarContrato700Paraiba = function(acao, jsonContrato){
    
    var sInput = "" +
        //1. Autenticação 
        util.rPad(util.nvl("?"	                                            ,""),6	,"0") + //N06 - Código do órgão 
        util.rPad(util.nvl("?"	                                            ,""),7	,"0") + //N07 - Login 
        util.rPad(util.nvl("?"	                                            ,""),6	," ") + //A06 - Senha 

        //header
        util.rPad(util.nvl(nonononono	                                    ,""),6	,"0") + //N06 - Sequencial da transação (reinicia a cada novo dia) 
        util.rPad(util.nvl("785"	                                        ,""),3	,"0") + //N03 - Código da transação (utilizar o valor 785) 
        util.rPad(util.nvl("4"	                                            ,""),1	,"0") + //N01 - Código da modalidade (utilizar o valor 4) 
        util.rPad(util.nvl("?"	                                            ,""),11	,"0") + //N11 - Código do cliente (utilizar os 11 primeiros dígitos do CNPJ da empresa) 
        util.rPad(util.nvl("PB"	                                            ,""),2	," ") + //A02 - UF de origem da transação A02 - UF de origem da transmissão 
        util.rPad(util.nvl("PB"	                                            ,""),2	," ") + //A02 - UF de destino da transmissão (utilizar o valor PB) 
        util.lPad(util.nvl("1"	                                            ,""),1	,"0") + //N01 - Tipo da condicionalidade da transação (utilizar o valor 1) 
        util.lPad(util.nvl("?"	                                            ,""),4	,"0") + //N04 - Tamanho da transação (referente a soma dos tamanhos da parte fixa e a parte variavel) 
        util.lPad(util.nvl("00"	                                            ,""),2	,"0") + //N02 - Código de retorno da transação (utilizar o valor 00) 
        util.lPad(util.nvl(util.getJulianDate() 	                        ,""),3	,"0") + //N03 - Dia juliano 

        //parametros 700
        //dados do credor
        util.rPad(util.nvl(jsonContrato["sChassiVeiculo"]                   ,""),21  ," ") + //A21 - Chassi A14 - Número de registro do contrato 
        util.rPad(util.nvl(jsonContrato["sNumAditivoContratoOrigem"]        ,""),14  ," ") + //A14 - Número do registro do aditivo 
        util.rPad(util.nvl(jsonContrato["nNumGravameContrato"]              ,""),8	 ,"0") + //N08 - Número do gravame A30 - Nome do logradouro do credor 
        util.rPad(util.nvl(jsonContrato["sNumImovelContrato"]               ,""),5	 ," ") + //A05 - Número do imóvel do credor 
        util.rPad(util.nvl(jsonContrato["sComplementoContrato"]             ,""),20  ," ") + //A20 - Complemento do imóvel do credor (não obrigatório) 
        util.rPad(util.nvl(jsonContrato["sBairroContrato"]                  ,""),20  ," ") + //A20 - Bairro do imóvel do credor 
        util.rPad(util.nvl(jsonContrato["nMunicipioContrato"]               ,""),4	 ,"0") + //N04 - Código do municipio do imóvel do credor (utilizar código padrão DENATRAN) 
        util.rPad(util.nvl(jsonContrato["sUfContrato"]                      ,""),2	 ," ") + //A02 - UF do imóvel do credor 
        util.rPad(util.nvl(jsonContrato["nCEPContrato"]                     ,""),8	 ,"0") + //N08 - CEP do imóvel do credor 
        util.rPad(util.nvl(jsonContrato["nDDDTelefoneContrato"]             ,""),4	 ,"0") + //N04 - DDD do telefone do credor 
        util.rPad(util.nvl(jsonContrato["nNumTelefoneContrato"]             ,""),9	 ,"0") + //N09 - Telefone do credor 

        //dados do devedor
        util.rPad(util.nvl(jsonContrato["sLogradouroContrato"]              ,""),30  ," ") + //A30 - Nome do logradouro do devedor 
        util.rPad(util.nvl(jsonContrato["sNumImovelContrato"]               ,""),5	 ," ") + //A05 - Número do imóvel do devedor 
        util.rPad(util.nvl(jsonContrato["sComplementoContrato"]             ,""),20  ," ") + //A20 - Complemento do imóvel do devedor 
        util.rPad(util.nvl(jsonContrato["sBairroContrato"]                  ,""),20  ," ") + //A20 - Bairro do imóvel do devedor 
        util.rPad(util.nvl(jsonContrato["nMunicipioContrato"]               ,""),4	 ,"0") + //N04 - Código do municipio do imóvel do devedor (utilizar código padrão DENATRAN) 
        util.rPad(util.nvl(jsonContrato["sUfContrato"]                      ,""),2	 ," ") + //A02 - UF do imóvel do devedor 
        util.rPad(util.nvl(jsonContrato["nCEPContrato"]                     ,""),8	 ,"0") + //N08 - CEP do imóvel do devedor 
        util.rPad(util.nvl(jsonContrato["nDDDTelefoneContrato"]             ,""),4	 ,"0") + //N04 - DDD do telefone do devedor 
        util.rPad(util.nvl(jsonContrato["nNumTelefoneContrato"]             ,""),9	 ,"0") + //N09 - Telefone do devedor 

        util.rPad(util.nvl(jsonContrato["nTaxaMultaContrato"]               ,""),6	 ,"0") + //N06 - Taxa de multa (% com 3 casas decimais) (não obrigatório) 
        util.rPad(util.nvl(jsonContrato["nTaxaMoraContrato"]                ,""),9	 ,"0") + //N09 - Taxa de mora (% com 3 casas decimais) (não obrigatório) 
        util.rPad(util.nvl(jsonContrato["sIndPenalidadeContrato"]           ,""),3	 ," ") + //A03 - Indicativo de penalidade (utilizar os valores SIM ou NAO) 
        util.rPad(util.nvl(jsonContrato["sPenalidadeContrato"]              ,""),50  ," ") + //A50 - Penalidade (não obrigatório caso indicativo NAO) 
        util.rPad(util.nvl(jsonContrato["sIndComissaoContrato"]             ,""),3	 ," ") + //A03 - Indicativo de comissão (utilizar os valores SIM ou NAO) 
        util.rPad(util.nvl(jsonContrato["nComissaoContrato"]                ,""),9	 ,"0") + //N09 - Comissão (não obrigatório caso indicativo NAO) 
        util.rPad(util.nvl(jsonContrato["nFlagTransacao"]                   ,""),1	 ,"0") + //N01 - Flag da transação (1 para inclusão de complemento do contrato, 2 para alteração de complemento do contrato, 3 para inclusão de complemento do aditivo, 4 para alteração de complemento do aditivo) 
        util.rPad(util.nvl(jsonContrato["nAssinaturaEletronica"]            ,""),21  ," ");  //A21 - Assinatura eletrônica (chave única gerada pela empresa para posteriores verificações de segurança) 

        var args = {"param": sInput};
        /*
        soap.createClient(endPointParaiba, function(err, client) {
            client.operacao(args, function(err, result) {
                sOutput = result;
            });
        });
        */
        //logar transação com detran
        return 1;
}

exports.enviarContrato785Paraiba = enviarContrato785Paraiba;
exports.enviarContrato700Paraiba = enviarContrato700Paraiba;
exports.teste = teste;

