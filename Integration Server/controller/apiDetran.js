const apiPernambuco = require('../controller/apiPernambuco')
const apiParaiba = require('../controller/apiParaiba')
const LogTransacaoRepository = require('../repository/LogTransacaoRepository')
var https = require('https');

const Pool = require('pg').Pool
const jsonData = require('../config//config-database.json');
const pool = new Pool({  user: jsonData.user,host: jsonData.host,database: jsonData.database,password: jsonData.password,port: jsonData.port,})


//exports.enviarContrato = function(request, response, next){
exports.enviarContrato = function(request, response){
    console.clear()
    
    var jsonEntrada = request.body; 
    var returnValue = "";

    try {
        var returnValue = "";

        //console.log('jsonEntrada.ufDetran=' + jsonEntrada.ufDetran)
        //console.log('jsonEntrada.acao=' + jsonEntrada.acao)

        //envio para o detran
        switch(jsonEntrada.ufDetran){
            case "PE": 
                switch (jsonEntrada.acao) {
                    case 'ENVIO':            console.log('PERNAMBUCO ENVIO');            returnValue = apiPernambuco.enviarContrato785Pernambuco(jsonEntrada);  break;
                    case 'ENVIOCOMPLEMENTO': console.log('PERNAMBUCO ENVIOCOMPLEMENTO'); returnValue = apiPernambuco.enviarContrato700Pernambuco(jsonEntrada);  break;
                }
                break;
            case "PB": 
                switch (jsonEntrada.acao) {
                    case 'ENVIO':            console.log('PARAIBA ENVIO');            returnValue = apiParaiba.enviarContrato785Paraiba(jsonEntrada);  break;
                    case 'ENVIOCOMPLEMENTO': console.log('PARAIBA ENVIOCOMPLEMENTO'); returnValue = apiParaiba.enviarContrato700Paraiba(jsonEntrada);  break;
                }
                break;
            case "T" : apiParaiba.teste(acjsonEntrada.nFlagTransacao,jsonEntrada,returnValue);                          break;
        }   
        console.log('executado'); 
        response.status(200).json(returnValue)
    } catch (error) {
        response.status(200).json(error)
        console.log(error)
    }
    
    
    //next()

    /*
    console.clear()
    
    var jsonEntrada = request.body;    //body = JSON.parse(request.body);        
    var returnValue = "";

    console.log('jsonEntrada.ufDetran:' + jsonEntrada.ufDetran)

    
    var returnValue = "";
    
    console.log('passo1')
    try{
        LogTransacaoRepository.obter(jsonEntrada.idTransacao, returnValue)
        console.log('retornoudd:' + returnValue)
        response.status(200).json(returnValue)
    }catch(error){
        console.log('error:' + error)
    }
    */
    //response.send(returnValue)
    
    //LogTransacaoRepository.obter(jsonEntrada.idTransacao, returnValue)    
    //returnValue2 = LogTransacaoRepository.obter(jsonEntrada.idTransacao, returnValue)
    
   /*

    var parameters = [];
    parameters.push(jsonEntrada.idTransacao);

    console.log('parameters:' + parameters)
    var sQuery = 'select id, contractid, apiname, inputinfo, outputinfo, assinatura, userid, creationdate from integration_log where id = $1';
    
    pool.query(sQuery, parameters, (err, res) => {
        if (err) {
            returnValue = err;
        } else {
            returnValue = res.rows;
            console.log("exec result=" + res.rows[0].apiname)
            response.status(200).json(returnValue)
        }
    });
*/

    
};

