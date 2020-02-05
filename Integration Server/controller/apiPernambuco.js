const request = require('request')
const util = require('../controller/util')
const jsonDataServer = require ('../config/config-server.json')
const endPointParaiba = jsonDataServer.endPointParaiba;
//const signer = require('../signer/signer')
const signer = require('../controller/signer')
const Pool = require('pg').Pool
const jsonData = require('../config/config-database.json');
const pool = new Pool({ user: jsonData.user, host: jsonData.host, database: jsonData.database, password: jsonData.password, port: jsonData.port })


    var enviarContrato785Pernambuco =  function (jsonContrato){
                
        //response.status(200).json({response: "sucesso"})
        //for (var key in ljson){text += 'Index is: ' + key + '\nDescription is:  ' + ljson[key] }

        
        var userId = "2";//id do usuario logado
        
        //CRIA LOG DE TRANSAÇÃO DE CHAMDA PARA DETRAN
        var sSql = "insert into integration_log (contractId,apiName,flag,inputinfo,outputinfo,assinatura,userId,creationDate) values ($1, $2, $3, $4, $5, $6, $7, now()) returning id";
        var aParameter = [jsonContrato.sRegistroContratoOrigem,jsonContrato.oTransacao.nCodTransacao,jsonContrato.nFlagTransacao,'','','',userId];
        var idTransacao = null;
        
        pool.query(sSql, aParameter,function(err, result) {
            if (err){} else { 
                idTransacao =  result.rows[0].id;

                //MONTA JSON PARA ENVIO PARA O DETRAN
                var inputJson = { 
                    "oTransacao":{ 
                        "nNumSeqTransacao" 			     : util.lPad(util.nvl("035973"                                          ,""),6  ,"0"), 
                        "nCodTransacao" 				 : util.lPad(util.nvl("785"                                             ,""),3  ,"0"),  
                        "nCodModalidadeProcessamento"    : util.lPad(util.nvl("4"                                               ,""),1  ,"0"),  
                        "nCodIdentCliente" 			     : util.lPad(util.nvl("1633"                                            ,""),11 ,"0"),  
                        "sUFOrigemTransacao" 			 : util.rPad(util.nvl("FE"                                              ,""),2  ," "),  
                        "sUFOrigemTransmissao" 		     : util.rPad(util.nvl("FE"                                              ,""),2  ," "),  
                        "sUFDestinoTransmissao" 		 : util.rPad(util.nvl("PE"                                              ,""),2  ," "),  
                        "nTipoCondTransacao" 			 : util.lPad(util.nvl("1"                                               ,""),1  ,"0"),  
                        "nTamanhoTransacao" 			 : util.lPad(util.nvl("0455"                                            ,""),4  ,"0"),  
                        "nCodRetornoTransacao" 		     : util.lPad(util.nvl("00"                                              ,""),2  ,"0"),  
                        "nDiaJuliano" 				     : util.lPad(util.nvl(util.getJulianDate()                              ,""),3  ,"0")
                    }, 
                    "oVeiculoContrato":{ 
                        "sChassiVeiculo" 				 : util.rPad(util.nvl(jsonContrato.sChassiVeiculo		                ,""),21 ," "), 
                        "nIRemarcacaoVeiculo" 		     : util.lPad(util.nvl(jsonContrato.nIRemarcacaoVeiculo		            ,""),1  ,"0"),
                        "sUFLicenciamentoVeiculo" 	     : util.rPad(util.nvl(jsonContrato.sUFLicenciamentoVeiculo		        ,""),2  ," "),
                        "sUFPlacaVeiculo" 			     : util.rPad(util.nvl(jsonContrato.sUFPlacaVeiculo		                ,""),2  ," "),
                        "sPlacaVeiculo" 				 : util.rPad(util.nvl(jsonContrato.sPlacaVeiculo		                ,""),7  ," "),
                        "nRenavamVeiculo" 			     : util.lPad(util.nvl(jsonContrato.nRenavamVeiculo		                ,""),11 ,"0"),
                        "nAnoFabricacaoVeiculo" 		 : util.lPad(util.nvl(jsonContrato.nAnoFabricacaoVeiculo		        ,""),4  ,"0"),
                        "nAnoModeloVeiculo" 			 : util.lPad(util.nvl(jsonContrato.nAnoModeloVeiculo		            ,""),4  ,"0")
                    }, 
                    "nCodAgenteContrato"  			     : util.lPad(util.nvl(jsonContrato.nCodAgenteContrato	                ,""),12 ,"0"), 
                    "sNomeAgenteContrato" 			     : util.rPad(util.nvl(jsonContrato.sNomeAgenteContrato	                ,""),40 ," "), 
                    "nCNPJAgenteContrato" 			     : util.lPad(util.nvl(jsonContrato.nCNPJAgenteContrato	                ,""),14 ,"0"), 
                    "sNumContrato" 					     : util.rPad(util.nvl(jsonContrato.sNumContrato	                        ,""),20 ," "), 
                    "nDataContrato" 					 : util.lPad(util.nvl(jsonContrato.nDataContrato	                    ,""),8  ,"0"), 
                    "nQtdParcelasContrato" 			     : util.lPad(util.nvl(jsonContrato.nQtdParcelasContrato	                ,""),3  ,"0"), 
                    "nNumRestricaoContrato" 			 : util.lPad(util.nvl(jsonContrato.nNumRestricaoContrato	            ,""),8  ,"0"), 
                    "nNumTipoGravameContrato" 		     : util.lPad(util.nvl(jsonContrato.nNumTipoGravameContrato	            ,""),2  ,"0"), 
                    "nCPFCNPJDevedorContrato" 		     : util.lPad(util.nvl(jsonContrato.nCPFCNPJDevedorContrato	            ,""),14 ,"0"), 
                    "sNomeDevedorContrato" 			     : util.rPad(util.nvl(jsonContrato.sNomeDevedorContrato	                ,""),40 ," "), 
                    "nTaxaJurosMesContrato" 			 : util.lPad(util.nvl(jsonContrato.nTaxaJurosMesContrato	            ,""),6  ,"0"), 
                    "nTaxaJurosAnoContrato" 			 : util.lPad(util.nvl(jsonContrato.nTaxaJurosAnoContrato	            ,""),6  ,"0"), 
                    "sTaxaJurosMultaContrato" 		     : util.rPad(util.nvl(jsonContrato.sTaxaJurosMultaContrato	            ,""),3  ," "),  
                    "sTaxaMoraDiaContrato" 			     : util.rPad(util.nvl(jsonContrato.sTaxaMoraDiaContrato	                ,""),3  ," "),    
                    "nValorTaxaContrato" 				 : util.lPad(util.nvl(jsonContrato.nValorTaxaContrato	                ,""),9  ,"0"), 
                    "nValorTotalFinanciamenContrato" 	 : util.lPad(util.nvl(jsonContrato.nValorTotalFinanciamenContrato	    ,""),9  ,"0"),                    
                    "nValorIOFContrato" 				 : util.lPad(util.nvl(jsonContrato.nValorIOFContrato            	    ,""),9  ,"0"), 
                    "nValorParcelaContrato" 			 : util.lPad(util.nvl(jsonContrato.nValorParcelaContrato	            ,""),9  ,"0"), 
                    "nDataVencPrimeiraParceContrato" 	 : util.lPad(util.nvl(jsonContrato.nDataVencPrimeiraParceContrato	    ,""),8  ,"0"), 
                    "nDataVencUltimaParcelaContrato" 	 : util.lPad(util.nvl(jsonContrato.nDataVencUltimaParcelaContrato	    ,""),8  ,"0"),
                    "nDataLiberacaoCreditoContrato" 	 : util.lPad(util.nvl(jsonContrato.nDataLiberacaoCreditoContrato	    ,""),8  ,"0"), 
                    "sUFLiberacaoCreditoContrato" 	     : util.rPad(util.nvl(jsonContrato.sUFLiberacaoCreditoContrato	        ,""),2  ," "), 
                    "sCidadeLibCreditoContrato" 		 : util.rPad(util.nvl(jsonContrato.sCidadeLibCreditoContrato	        ,""),25 ," "), 
                    "sIndicesContrato" 				     : util.rPad(util.nvl(jsonContrato.sIndicesContrato	                    ,""),10 ," "), 
                    "sNumGrupoConsorcioContrato" 		 : util.rPad(util.nvl(jsonContrato.sNumGrupoConsorcioContrato	        ,""),6  ," "), 
                    "nNumCotaConsorcioContrato" 		 : util.lPad(util.nvl(jsonContrato.nNumCotaConsorcioContrato	        ,""),6  ,"0"), 
                    "sRegistroContratoOrigem" 		     : util.rPad(util.nvl(jsonContrato.sRegistroContratoOrigem	            ,""),14 ," "), 
                    "sNumAditivoContrato" 			     : util.rPad(util.nvl(jsonContrato.sNumAditivoContrato	                ,""),20 ," "), 
                    "nDataAditivoContrato" 			     : util.lPad(util.nvl(jsonContrato.nDataAditivoContrato	                ,""),8  ,"0"), 
                    "sNumAditivoContratoOrigem" 		 : util.rPad(util.nvl(jsonContrato.sNumAditivoContratoOrigem	        ,""),14 ," "), 
                    "nFlagTransacao" 					 : util.lPad(util.nvl(jsonContrato.nFlagTransacao	                    ,""),1  ,"0"), 
                    "nAssinaturaEletronica" 			 : util.lPad(util.nvl(idTransacao      	                                ,""),21 ,"0")
                };    

                //ASSINATURA JSON
                var assinatura = signer.assinarDocumento(JSON.stringify(inputJson));

                //CHAMADA API DETRAN
                var detranReturnValue = ""
                try{
                    var request = require('request');
                    var options = { uri: endPointParaiba, method: 'POST', json: true,body: Data,data: inputJson}
                    request(options, function (err, res, body) {
                        if (err) { 
                            detranReturnValue = '[Falha na comunicacao com detran:' + err + "]"
                        }else{
                            detranReturnValue = body;
                        }
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
        //pool.query('BEGIN');try {pool.query('COMMIT');} catch (error) {pool.query('ROLLBACK');}
    }

    var enviarContrato700Pernambuco = function(jsonContrato){
        var userId = "2";//id do usuario logado

        //CRIA LOG DE TRANSAÇÃO DE CHAMDA PARA DETRAN
        var sSql = "insert into integration_log (contractId,apiName,flag,inputinfo,outputinfo,assinatura,userId,creationDate) values ($1, $2, $3, $4, $5, $6, $7, now()) returning id";
        var aParameter = [jsonContrato.sRegistroContratoOrigem,jsonContrato.oTransacao.nCodTransacao,jsonContrato.nFlagTransacao,'','','',jsonContrato.userId];
        var idTransacao = null;
        
        pool.query(sSql, aParameter,function(err, result) {
            if (err){} else { 
                idTransacao =  result.rows[0].id;

                var inputJson = {
                    "oTransacao": {
                        "nNumSeqTransacao"				: util.lPad(util.nvl("000072"      			    ,""),6   ,"0"), 
                        "nCodTransacao"					: util.lPad(util.nvl("700"         			    ,""),3   ,"0"),
                        "nCodModalidadeProcessamento"	: util.lPad(util.nvl("4"           			    ,""),1   ,"0"),
                        "nCodIdentCliente"				: util.lPad(util.nvl("1633"  		            ,""),11  ,"0"),
                        "sUFOrigemTransacao"			: util.rPad(util.nvl("FE"         			    ,""),2   ," "),
                        "sUFOrigemTransmissao"			: util.rPad(util.nvl("FE"         			    ,""),2   ," "),
                        "sUFDestinoTransmissao"			: util.rPad(util.nvl("PE"         			    ,""),2   ," "),
                        "nTipoCondTransacao"			: util.lPad(util.nvl("1"          			    ,""),1   ,"0"),
                        "nTamanhoTransacao"				: util.lPad(util.nvl("0400"       			    ,""),4   ,"0"),
                        "nCodRetornoTransacao"			: util.lPad(util.nvl("00"         			    ,""),2   ,"0"),
                        "nDiaJuliano"					: util.lPad(util.nvl(util.getJulianDate()  	,""),3   ,"0")
                    },
                    "oVeiculoContrato": {
                        "sChassiVeiculo"				: util.rPad(util.nvl(jsonContrato["sChassiVeiculo"]               ,""),21  ," ") 
                    },
                    //"sRegistroContratoOrigem"		    : util.rPad(util.nvl(jsonContrato["sRegistroContratoOrigem"]      ,""),14  ," "), 
                "sRegistroContratoOrigem"		    : util.rPad(util.nvl(jsonContrato["idRegistroContrato"]      ,""),14  ," "), 

                    "sNumAditivoContratoOrigem"	        : util.rPad(util.nvl(jsonContrato["sNumAditivoContratoOrigem"]    ,""),14  ," "), 
                    // "nNumGravameContrato"				: util.lPad(util.nvl(jsonContrato["nNumGravameContrato"]          ,""),8   ,"0"), 
                    "nNumGravameContrato"				: util.lPad(util.nvl(jsonContrato["nNumRestricaoContrato"]          ,""),8   ,"0"), 
                    "oEnderecoCredor": {
                        "sLogradouroContrato"		    : util.rPad(util.nvl(jsonContrato["sLogradouroContrato"]          ,""),30  ," "), 
                        "sNumImovelContrato"		    : util.rPad(util.nvl(jsonContrato["sNumImovelContrato"]           ,""),5   ," "), 
                        "sComplementoContrato"	        : util.rPad(util.nvl(jsonContrato["sComplementoContrato"]         ,""),20  ," "), 
                        "sBairroContrato"				: util.rPad(util.nvl(jsonContrato["sBairroContrato"]              ,""),20  ," "), 
                        "nMunicipioContrato"		    : util.lPad(util.nvl(jsonContrato["nMunicipioContrato"]           ,""),4   ,"0"), 
                        "sUfContrato"					: util.rPad(util.nvl(jsonContrato["sUfContrato"]                  ,""),2   ," "), 
                        "nCEPContrato"					: util.lPad(util.nvl(jsonContrato["nCEPContrato"]                 ,""),8   ,"0"), 
                        "nDDDTelefoneContrato"	        : util.lPad(util.nvl(jsonContrato["nDDDTelefoneContrato"]         ,""),4   ,"0"), 
                        "nNumTelefoneContrato"	        : util.lPad(util.nvl(jsonContrato["nNumTelefoneContrato"]         ,""),9   ,"0") 
                    },
                    "oEnderecoDevedor": {
                        "sLogradouroContrato"		    : util.rPad(util.nvl(jsonContrato["sLogradouroContrato"]          ,""),30  ," "), 
                        "sNumImovelContrato"		    : util.rPad(util.nvl(jsonContrato["sNumImovelContrato"]           ,""),5   ," "), 
                        "sComplementoContrato"	        : util.rPad(util.nvl(jsonContrato["sComplementoContrato"]         ,""),20  ," "), 
                        "sBairroContrato"				: util.rPad(util.nvl(jsonContrato["sBairroContrato"]              ,""),20  ," "), 
                        "nMunicipioContrato"		    : util.lPad(util.nvl(jsonContrato["nMunicipioContrato"]           ,""),4   ,"0"), 
                        "sUfContrato"					: util.rPad(util.nvl(jsonContrato["sUfContrato"]                  ,""),2   ," "), 
                        "nCEPContrato"					: util.lPad(util.nvl(jsonContrato["nCEPContrato"]                 ,""),8   ,"0"), 
                        "nDDDTelefoneContrato"	        : util.lPad(util.nvl(jsonContrato["nDDDTelefoneContrato"]         ,""),4   ,"0"), 
                        "nNumTelefoneContrato"	        : util.lPad(util.nvl(jsonContrato["nNumTelefoneContrato"]         ,""),9   ,"0")
                    },
                    "nTaxaMultaContrato"			    : util.lPad(util.nvl(jsonContrato["nTaxaMultaContrato"]           ,""),6   ,"0"), 
                    "nTaxaMoraContrato"				    : util.lPad(util.nvl(jsonContrato["nTaxaMoraContrato"]            ,""),9   ,"0"), 
                    "sIndPenalidadeContrato"	        : util.rPad(util.nvl(jsonContrato["sIndPenalidadeContrato"]       ,""),3   ," "), 
                    "sPenalidadeContrato"			    : util.rPad(util.nvl(jsonContrato["sPenalidadeContrato"]          ,""),50  ," "), 
                    "sIndComissaoContrato"		        : util.rPad(util.nvl(jsonContrato["sIndComissaoContrato"]         ,""),3   ," "), 
                    "nComissaoContrato"				    : util.lPad(util.nvl(jsonContrato["nComissaoContrato"]            ,""),9   ,"0"), 
                    "nFlagTransacao"					: util.lPad(util.nvl(jsonContrato["nFlagTransacao"]               ,""),1   ,"0"), 
                    "nAssinaturaEletronica"		        : util.lPad(util.nvl(idTransacao                                  ,""),21  ,"0")
                };
                //console.log(JSON.stringify(inputJson))

                //ASSINATURA JSON
                var assinatura = signer.assinarDocumento(JSON.stringify(inputJson));

                //CHAMADA API DETRAN
                var detranReturnValue = ""
                try{
                    var request = require('request');
                    var options = { uri: endPointParaiba, method: 'POST', json: true,body: Data,data: inputJson}
                    request(options, function (err, res, body) {
                        if (err) { 
                            detranReturnValue = '[Falha na comunicacao com detran:' + err + "]"
                        }else{
                            detranReturnValue = body;
                        }
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
        

        /*
        try{
            var request = require('request');
            var options = { uri: endPointParaiba, method: 'POST', json: true, body: Data, data: inputJson }
            request(options, function (err, res, body) {
                if (err) { 
                    console.log('{Erro.' + host + ': ' + err + '}');
                }else{
                    console.log(body);
                }
            });
        }catch(e){console.log('falha na chamada Rest:' + e)}
        */
    }

exports.enviarContrato785Pernambuco = enviarContrato785Pernambuco;
exports.enviarContrato700Pernambuco = enviarContrato700Pernambuco;
/*


integracaoPernanbucoRest=http://200.238.67.2:41075/WebApiRegistroContratoGravame/RegistraContrato


        transacaoDetran.setJsonChamada(json.toString());
        transacaoDetran.setIdRegistroContrato(registroContrato.getIdRegistroContrato());
        transacaoDetran.setNumeroContrato(registroContrato.getNumContrato());
        transacaoDetranRepository.save(transacaoDetran);
        
        RequestBody body = RequestBody.create(json.toString(),MediaType.parse("application/json; charset=utf-8"));
        Request request = new Request.Builder().url(integracaoPernanbucoRest).post(body).build();
        try (Response response = httpClient.newCall(request).execute()) {
            
            personResultAsJsonStr = response.body().string().toString();
            try{
                JSONObject retornoJson = new JSONObject(personResultAsJsonStr);            
                JSONObject jsonRet =new JSONObject();
                jsonRet.put("nCod", retornoJson.getLong("nCod"));
                jsonRet.put("sMensagem", retornoJson.get("sMensagem"));
                String message = getErrorMessagePN(retornoJson.getInt("nCod"));
                jsonRet.put("sMensagemTratada", message==null?"":message);
                transacaoDetran.setValorRetorno(jsonRet.toString());
                transacaoDetranRepository.save(transacaoDetran);
                personResultAsJsonStr = jsonRet.toString();
            }catch(Exception ex){
                transacaoDetran.setValorRetorno(personResultAsJsonStr);
                transacaoDetranRepository.save(transacaoDetran);
            }
            
        }catch(Exception ex){
            
            String sErro = ex.getMessage();
            String sCausa = ex.getCause()==null?"":ex.getCause().toString();
            transacaoDetran.setValorRetorno(sErro + sCausa);
            transacaoDetranRepository.save(transacaoDetran);
            throw new Exception(sErro + sCausa);
            
        }
		
		
    public String getErrorMessagePN(Integer idError){

        HashMap<Integer, String> errosPN = new HashMap<>();

        errosPN.put(30	, "Transação autorizada");
        errosPN.put(56	, "Transação negada, não existe cessão de direitos pendente no Detran para inclusão do aditivo do contrato");// (flag transação = 3)
        errosPN.put(59	, "Os Parâmetros 1 e 2 são obrigatórios para execução");
        errosPN.put(60	, "Tamanho Informado no cabeçalho da Transação difere do tamanho recebido");
        errosPN.put(61	, "Credenciado não cadastrado no DETRAN-PE");
        errosPN.put(62	, "Código da transação inválido ou indevido");
        errosPN.put(63	, "Já existe um número sequencial igual ao que está sendo enviado para essa transação.");
        errosPN.put(64	, "Transação negada, Número da Restrição diverge do informado no gravame que está pendente no Detran.");
        errosPN.put(65	, "Transação negada, Tipo da Restrição diverge do informado no gravame que está pendente no Detran");
        errosPN.put(66	, "Transação negada, Número do Contrato diverge do informado no gravame que está pendente no Detran");
        errosPN.put(67	, "Transação negada, CGC/CPF do Financiado diverge do informado no gravame que está pendente no Detran");
        errosPN.put(68	, "Transação negada, CGC do Agente Financeiro diverge do informado no gravame que está pendente no Detran");
        errosPN.put(69	, "Transação negada, Identificação de Remarcação diverge do informado no gravame que está pendente no Detran");
        errosPN.put(70	, "Transação negada, Placa diverge do informado no gravame que está pendente no Detran");
        errosPN.put(71	, "Transação negada, Código RENAVAM diverge do informado no gravame que está pendente no Detran");
        errosPN.put(72	, "Transação negada, UF de Origem da Placa diverge da informada no gravame que está pendente no Detran");
        errosPN.put(73	, "Transação negada, Ano de Fabricação diverge do informado no gravame que está pendente no Detran");
        errosPN.put(74	, "Transação negada, Ano Modelo diverge do informado no gravame que está pendente no Detran");
        errosPN.put(76	, "Transação negada, Não existe gravame pendente no Detran para inclusão do registro do contrato");//(flag transação = 1)
        errosPN.put(77	, "Transação negada, Não existe cadastro de registro de contrato cadastrado no Detran.");//(Na transação 785 esse código é válido apenas quando o flag é igual a 2 ou 4. Na 700, é usado em qualquer flag.)
        errosPN.put(80	, "Erro no preenchimento da parte fixa da transação");
        errosPN.put(81	, "Transação negada, Já existe registro de contrato cadastrado (flag transação = 1)");
        errosPN.put(82	, "Transação negada, Já existe registro de aditivo para este contrato (flag transação = 2)");
        errosPN.put(84	, "Transação negada, Não existe registro de aditivo cadastrado (flag transação = 4)");
        errosPN.put(87	, "Transação negada, Documento do veículo já emitido (flag transação = 2)");
        errosPN.put(88	, "Transação negada, Nº de registro de contrato / nº de registro do aditivo não confere com o cadastrado (flag da transação = 2 ou 4)");
        errosPN.put(95	, "Transação negada, Existe protocolo aberto / processo em andamento no Detran");
        errosPN.put(200	, "Transação negada, Agente financeiro não habilitado para operar no Detran");
        errosPN.put(227	, "Transação negada, Nome do logradouro inválido / não informado");
        errosPN.put(228	, "Transação negada, Código do município do endereço inválido / não informado");
        errosPN.put(229	, "Transação negada, UF do endereço inválida / não informada");
        errosPN.put(230	, "Transação negada, CEP do endereço inválido / não informado");
        errosPN.put(231	, "Transação negada, Número do imóvel do endereço não informado");
        errosPN.put(232	, "Transação negada, Nome do bairro do endereço não informado");
        errosPN.put(264	, "Transação negada, DDD do telefone não informado ou inválido");
        errosPN.put(265	, "Transação negada, Número do telefone não informado ou inválido");
        errosPN.put(266	, "Transação negada, Taxa de multa não informado ou inválido");
        errosPN.put(267	, "Transação negada, Taxa de mora não informado ou inválido");
        errosPN.put(268	, "Transação negada, Indicativo de penalidade diferente de SIM e NÃO");
        errosPN.put(269	, "Transação negada, Penalidade não informada");
        errosPN.put(270	, "Transação negada, Indicativo de comissão diferente de SIM e NÃO");
        errosPN.put(271	, "Transação negada, Percentual da comissão não informado ou inválido");
        errosPN.put(272	, "Transação negada, Flag da transação não informado ou inválido");//(diferente de 1 e 2 e 3 e 4)
        
        return errosPN.get(idError);
    }

    Recife - PE Rua Tabaiares, 360 / Ilha do Retiro Recife/PE CEP: 50750230
update tb_registro_contrato set municipio_contrato = 2471,num_imovel_contrato = 12, bairro_contrato = 'Alagado',uf_contrato = 'PE',cep_contrato = 50750230,logradouro_contrato = 'RUA 9 SUL';
 update tb_credora set 			      id_municipio = 2471,             numero = 12, bairro 		   = 'Alagado',    sigla_uf = 'PE',		   cep = 50750230, logradouro = 'RUA 9 SUL';


*/